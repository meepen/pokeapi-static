import {resourceToId} from '../api-utils.js';
import {client} from '../cache-client.js';
import {collectResources, runInParallel} from '../parallelism.js';

/**
 * Collects GameClient resources from the API
 */
export async function collectGameResources() {
	const Generation = await collectResources((offset, count) =>
		client.fetchGame('listGenerations', offset, count),
	);

	const generations = await runInParallel(
		Generation.map(
			(generation) => () =>
				client.fetchGame('getGenerationById', resourceToId(generation)),
		),
	);

	const VersionGroup = await collectResources((offset, count) =>
		client.fetchGame('listVersionGroups', offset, count),
	);

	const versionGroups = await runInParallel(
		VersionGroup.map(
			(versionGroup) => () =>
				client.fetchGame('getVersionGroupById', resourceToId(versionGroup)),
		),
	);

	const Pokedex = await collectResources((offset, count) =>
		client.fetchGame('listPokedexes', offset, count),
	);

	const pokedexes = await runInParallel(
		Pokedex.map(
			(pokedex) => () =>
				client.fetchGame('getPokedexById', resourceToId(pokedex)),
		),
	);

	const Version = await collectResources((offset, count) =>
		client.fetchGame('listVersions', offset, count),
	);

	const versions = await runInParallel(
		Version.map(
			(version) => () =>
				client.fetchGame('getVersionById', resourceToId(version)),
		),
	);

	return {
		generations,
		versionGroups,
		pokedexes,
		versions,
		enums: {
			Generation,
			VersionGroup,
			Pokedex,
			Version,
		},
	};
}
