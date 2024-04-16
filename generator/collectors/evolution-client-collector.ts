import {resourceToId} from '../api-utils.js';
import {client} from '../cache-client.js';
import {collectResources, runInParallel} from '../parallelism.js';

/**
 * Collects EvolutionClient resources from the API
 */
export async function collectEvolutionResources() {
	const EvolutionChain = await collectResources((offset, count) =>
		client.fetchEvolution('listEvolutionChains', offset, count),
	);

	const evolutionChains = await runInParallel(
		EvolutionChain.map(
			(chain) => () =>
				client.fetchEvolution('getEvolutionChainById', resourceToId(chain)),
		),
	);

	const EvolutionTrigger = await collectResources((offset, count) =>
		client.fetchEvolution('listEvolutionTriggers', offset, count),
	);

	const evolutionTriggers = await runInParallel(
		EvolutionTrigger.map(
			(trigger) => () =>
				client.fetchEvolution('getEvolutionTriggerById', resourceToId(trigger)),
		),
	);

	return {
		evolutionChains,
		evolutionTriggers,
		enums: {
			EvolutionChain,
			EvolutionTrigger,
		},
	};
}
