import {resourceToId} from '../api-utils.js';
import {client} from '../cache-client.js';
import {collectResources, runInParallel} from '../parallelism.js';

/**
 * Collects PokemonClient resources from the API
 */
export async function collectPokemonResources() {
	const Species = await collectResources((offset, count) =>
		client.fetch('listPokemonSpecies', offset, count),
	);
	console.log('pokemon count:', Species.length);

	const species = await runInParallel(
		Species.map(
			(pokemon) => () =>
				client.fetch('getPokemonSpeciesById', resourceToId(pokemon)),
		),
	);

	const Variety = species.flatMap((p) => p.varieties).map((v) => v.pokemon);
	const varieties = await runInParallel(
		Variety.map(
			(variety) => () => client.fetch('getPokemonById', resourceToId(variety)),
		),
	);

	const Form = await collectResources((offset, count) =>
		client.fetch('listPokemonForms', offset, count),
	);

	const forms = await runInParallel(
		Form.map(
			(form) => () => client.fetch('getPokemonFormById', resourceToId(form)),
		),
	);

	const Gender = await collectResources((offset, count) =>
		client.fetch('listGenders', offset, count),
	);

	const genders = await runInParallel(
		Gender.map(
			(gender) => () => client.fetch('getGenderById', resourceToId(gender)),
		),
	);

	const Shape = await collectResources((offset, count) =>
		client.fetch('listPokemonShapes', offset, count),
	);

	const shapes = await runInParallel(
		Shape.map(
			(shape) => () => client.fetch('getPokemonShapeById', resourceToId(shape)),
		),
	);

	const Habitat = await collectResources((offset, count) =>
		client.fetch('listPokemonHabitats', offset, count),
	);

	const habitats = await runInParallel(
		Habitat.map(
			(habitat) => () =>
				client.fetch('getPokemonHabitatById', resourceToId(habitat)),
		),
	);

	const EggGroup = await collectResources((offset, count) =>
		client.fetch('listEggGroups', offset, count),
	);

	const eggGroups = await runInParallel(
		EggGroup.map(
			(eggGroup) => () =>
				client.fetch('getEggGroupById', resourceToId(eggGroup)),
		),
	);

	const Ability = await collectResources((offset, count) =>
		client.fetch('listAbilities', offset, count),
	);

	const abilities = await runInParallel(
		Ability.map(
			(ability) => () => client.fetch('getAbilityById', resourceToId(ability)),
		),
	);

	const Characteristic = await collectResources((offset, count) =>
		client.fetch('listCharacteristics', offset, count),
	);

	const characteristics = await runInParallel(
		Characteristic.map(
			(characteristic) => () =>
				client.fetch('getCharacteristicById', resourceToId(characteristic)),
		),
	);

	const GrowthRate = await collectResources((offset, count) =>
		client.fetch('listGrowthRates', offset, count),
	);

	const growthRates = await runInParallel(
		GrowthRate.map(
			(growthRate) => () =>
				client.fetch('getGrowthRateById', resourceToId(growthRate)),
		),
	);

	const Nature = await collectResources((offset, count) =>
		client.fetch('listNatures', offset, count),
	);

	const natures = await runInParallel(
		Nature.map(
			(nature) => () => client.fetch('getNatureById', resourceToId(nature)),
		),
	);

	const Stat = await collectResources((offset, count) =>
		client.fetch('listStats', offset, count),
	);

	const stats = await runInParallel(
		Stat.map((stat) => () => client.fetch('getStatById', resourceToId(stat))),
	);

	const Type = await collectResources((offset, count) =>
		client.fetch('listTypes', offset, count),
	);

	const types = await runInParallel(
		Type.map((type) => () => client.fetch('getTypeById', resourceToId(type))),
	);

	const PokeathlonStat = await collectResources((offset, count) =>
		client.fetch('listPokeathlonStats', offset, count),
	);

	const pokeathlonStats = await runInParallel(
		PokeathlonStat.map(
			(pokeathlonStat) => () =>
				client.fetch('getPokeathlonStatById', resourceToId(pokeathlonStat)),
		),
	);

	const Color = await collectResources((offset, count) =>
		client.fetch('listPokemonColors', offset, count),
	);

	const colors = await runInParallel(
		Color.map(
			(color) => () => client.fetch('getPokemonColorById', resourceToId(color)),
		),
	);

	return {
		species,
		varieties,
		forms,
		genders,
		shapes,
		habitats,
		eggGroups,
		abilities,
		characteristics,
		growthRates,
		natures,
		stats,
		types,
		pokeathlonStats,
		colors,
		enums: {
			Species,
			Variety,
			Form,
			Gender,
			Shape,
			Habitat,
			EggGroup,
			Ability,
			Characteristic,
			GrowthRate,
			Nature,
			Stat,
			Type,
			PokeathlonStat,
			Color,
		},
	};
}
