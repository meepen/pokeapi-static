import type {EvolutionChain, EvolutionDetail} from 'pokenode-ts';
import {safe} from './safe.js';
import {enumManager} from '../enum.js';

function nullOrSafe<T>(value: T | null) {
	return value === null ? null : safe(value);
}

function detailsToEvolutionTriggerDetail(details: EvolutionDetail) {
	const newDetails = {
		gender:
			details.gender === null
				? null
				: enumManager.resourceIdToEnum('Gender', details.gender),
		item:
			details.item === null ? null : enumManager.resourceToEnum(details.item),
		knownMove:
			details.known_move === null
				? null
				: enumManager.resourceToEnum(details.known_move),
		knownMoveType:
			details.known_move_type === null
				? null
				: enumManager.resourceToEnum(details.known_move_type),
		location:
			details.location === null
				? null
				: enumManager.resourceToEnum(details.location),
		minAffection: nullOrSafe(details.min_affection),
		minBeauty: nullOrSafe(details.min_beauty),
		minLevel: nullOrSafe(details.min_level),
		needsOverworldRain:
			details.needs_overworld_rain === false ||
			details.needs_overworld_rain === null
				? null
				: 'true',
		partySpecies:
			details.party_species === null
				? null
				: enumManager.resourceToEnum(details.party_species),
		partyType:
			details.party_type === null
				? null
				: enumManager.resourceToEnum(details.party_type),
		relativePhysicalStats:
			details.relative_physical_stats === null
				? null
				: safe(details.relative_physical_stats),
		timeOfDay: details.time_of_day === '' ? null : safe(details.time_of_day),
		tradeSpecies:
			details.trade_species === null
				? null
				: enumManager.resourceToEnum(details.trade_species),
		trigger:
			details.trigger === null
				? null
				: enumManager.resourceToEnum(details.trigger),
		turnUpsideDown:
			details.turn_upside_down === false || details.turn_upside_down === null
				? null
				: 'true',
	};

	for (const [key, value] of Object.entries(newDetails) as [
		keyof typeof newDetails,
		unknown,
	][]) {
		if (value === null) {
			delete newDetails[key];
		}
	}

	return `{${Object.entries(newDetails)
		.map(([key, value]) => `${key}: ${value}`)
		.join(',')}}`;
}

export async function createEvolutionData(evolutionData: EvolutionChain[]) {
	const chainLinks = evolutionData
		.flatMap((chain) => chain.chain)
		.flatMap((chain) => [chain, ...chain.evolves_to])
		.flatMap((chain) =>
			chain.evolves_to.flatMap((evolvesTo) =>
				evolvesTo.evolution_details.map((details) => ({
					fromSpecies: chain.species,
					isBaby: chain.is_baby,
					details,
					toSpecies: evolvesTo.species,
				})),
			),
		);

	return `// AUTO GENERATED FILE
import { Species } from './species.enum.js';
import { Gender } from './gender.enum.js';
import { EvolutionTrigger } from './evolution-trigger.enum.js';
import { Item } from './item.enum.js';
import { Move } from './move.enum.js';
import { Type } from './type.enum.js';
import { Location } from './location.enum.js';

interface EvolutionTriggerDetail {
	gender?: Gender;
	item?: Item;
	knownMove?: Move;
	knownMoveType?: Type;
	location?: Location;
	minAffection?: number;
	minBeauty?: number;
	minHappiness?: number;
	minLevel?: number;
	needsOverworldRain?: true;
	partySpecies?: Species;
	partyType?: Type;
	relativePhysicalStats?: number;
	timeOfDay?: 'day' | 'night' | 'full-moon' | 'dusk';
	tradeSpecies?: Species;
	trigger: EvolutionTrigger;
	turnUpsideDown?: true;
}

export class Evolution {
  constructor(
    public readonly fromSpecies: Species,
    public readonly toSpecies: Species,
    public readonly trigger: EvolutionTriggerDetail,
		public readonly isBaby: boolean,
  ) {
    const fromSpeciesEvolution = Evolution.map.get(fromSpecies);
    if (fromSpeciesEvolution) {
      fromSpeciesEvolution.push(this);
    } else {
      Evolution.map.set(fromSpecies, [this]);
    }
  }

  static map = new Map<Species, Evolution[]>();
}
${chainLinks
	.map(
		(chain) => `
new Evolution(
  ${enumManager.resourceToEnum(chain.fromSpecies)},
  ${enumManager.resourceToEnum(chain.toSpecies)},
  ${detailsToEvolutionTriggerDetail(chain.details)},
	${safe(chain.isBaby)},
)`,
	)
	.join('')}

`;
}
