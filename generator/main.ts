import {writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {collectEvolutionResources} from './collectors/evolution-client-collector.js';
import {collectGameResources} from './collectors/game-client-collector.js';
import {collectItemResources} from './collectors/item-client-collector.js';
import {collectMoveResources} from './collectors/move-client-collector.js';
import {collectPokemonResources} from './collectors/pokemon-client-collector.js';
import {createDirectories, generatedDir} from './file-structure.js';
import {createPokemonData} from './data-files/create-pokemon-data.js';
import {collectUtilityResources} from './collectors/utility-client-collector.js';
import {createEvolutionData} from './data-files/create-evolution-data.js';
import {collectLocationResources} from './collectors/location-client-collector.js';
import {enumManager} from './enum.js';

await createDirectories();

const evolutionData = await collectEvolutionResources();
const gameData = await collectGameResources();
const itemData = await collectItemResources();
const moveData = await collectMoveResources();
const pokemonData = await collectPokemonResources();
const utilityData = await collectUtilityResources();
const locationData = await collectLocationResources();

await enumManager.writeEnums(evolutionData);
await enumManager.writeEnums(gameData);
await enumManager.writeEnums(itemData);
await enumManager.writeEnums(moveData);
await enumManager.writeEnums(pokemonData);
await enumManager.writeEnums(utilityData);
await enumManager.writeEnums(locationData);
await enumManager.writeEnumExportFile();

await createPokemonData(
	pokemonData.species,
	pokemonData.varieties,
	pokemonData.forms,
);

await writeFile(
	join(generatedDir, 'evolution-data.ts'),
	await createEvolutionData(evolutionData.evolutionChains),
);
