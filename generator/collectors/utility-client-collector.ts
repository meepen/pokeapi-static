import {resourceToId} from '../api-utils.js';
import {client} from '../cache-client.js';
import {collectResources, runInParallel} from '../parallelism.js';

/**
 * Collects LanguageClient resources from the API
 */
export async function collectUtilityResources() {
	const Language = await collectResources((offset, count) =>
		client.fetchUtility('listLanguages', offset, count),
	);

	const languages = await runInParallel(
		Language.map(
			(language) => () =>
				client.fetchUtility('getLanguageById', resourceToId(language)),
		),
	);

	return {
		languages,
		enums: {
			Language,
		},
	};
}
