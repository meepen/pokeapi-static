import type {Localization} from '../localization.js';
import type {Species} from './species.enum.js';
import type {Variety} from './variety.enum.js';
import type {Form} from './form.enum.js';
import type {Type} from './type.enum.js';
import type {VersionGroup} from './version-group.enum.js';
import type {Color} from './color.enum.js';
import type {EggGroup} from './egg-group.enum.js';
import type {Stat} from './stat.enum.js';
import type {Item} from './item.enum.js';
import type {Ability} from './ability.enum.js';
import type {Generation} from './generation.enum.js';
import type {GrowthRate} from './growth-rate.enum.js';
import type {Shape} from './shape.enum.js';
import type {Move} from './move.enum.js';
import type {MoveLearnMethod} from './move-learn-method.enum.js';
import type {Version} from './version.enum.js';

type RemoveFirst<T extends unknown[]> = T extends [unknown, ...infer U]
	? U
	: never;

type GenderRate = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type PokemonStatData = {
	[stat in Stat]?: {
		baseStat: number;
		effort?: number;
	};
};

export interface PokemonSprites {
	frontDefault?: string;
	frontShiny?: string;
	frontFemale?: string;
	frontShinyFemale?: string;
	backDefault?: string;
	backShiny?: string;
	backFemale?: string;
	backShinyFemale?: string;
}

export interface MoveLearnData {
	move: Move;
	versionGroups: [VersionGroup, VersionGroup];
	levelLearnedAt?: number;
	learnMethod: MoveLearnMethod;
}

export enum PokemonFormBits {
	None = 0,
	Default = 1,
	BattleOnly = 2,
	Mega = 4,
}

export class PokemonForm {
	constructor(
		public readonly variety: PokemonVariety,
		public readonly form: Form,
		public readonly formBits: PokemonFormBits,
		public readonly formSprites: PokemonSprites,
		public readonly types: Type[],
		public readonly versionGroup: VersionGroup,
		public readonly localizedNames: Localization,
		public readonly localizedFormNames: Localization,
		public readonly formName?: string,
	) {
		PokemonForm.map.set(form, this);
	}

	static map = new Map<Form, PokemonForm>();
}

type HeldItemData = {
	[version in Version]?: {
		[item in Item]?: number;
	};
};

interface AbilityData {
	ability: Ability;
	isHidden: boolean;
	slot: number;
}

export class PokemonVariety {
	constructor(
		public readonly species: PokemonSpecies,
		public readonly variety: Variety,
		public readonly baseExperience: number | null,
		public readonly height: number,
		public readonly weight: number,
		public readonly types: Type[],
		public readonly sprites: PokemonSprites,
		public readonly stats: PokemonStatData,
		public readonly heldItems: HeldItemData,
		public readonly moves: MoveLearnData[],
		public readonly abilities: AbilityData[],
		forms: RemoveFirst<ConstructorParameters<typeof PokemonForm>>[],
	) {
		this.forms = forms.map((form) => new PokemonForm(this, ...form));

		PokemonVariety.map.set(variety, this);
	}

	public readonly forms: PokemonForm[];

	static map = new Map<Variety, PokemonVariety>();
}

export enum PokemonSpeciesBits {
	None = 0,
	Mythical = 1,
	Legendary = 2,
	Baby = 4,
	GenderDifferences = 8,
	FormsSwitchable = 16,
}

export class PokemonSpecies {
	constructor(
		public readonly species: Species,
		public readonly baseHappiness: number | null,
		public readonly captureRate: number,
		public readonly color: Color,
		public readonly eggGroups: EggGroup[],
		/**
		 * The gender rate is -1 if the Pokémon is genderless.
		 * The gender rate is otherwise a number from 0 to 8.
		 * The formula to calculate the chance for a female
		 * Pokémon is `genderRate / 8`.
		 */
		public readonly genderRate: GenderRate,
		public readonly speciesBits: PokemonSpeciesBits,
		public readonly generation: Generation,
		public readonly hatchCounter: number | null,
		public readonly growthRate: GrowthRate,
		public readonly shape: Shape | null,
		public readonly localizedNames: Localization,
		public readonly genera: Localization,
		public readonly flavorTexts: Localization,
		varietyData: RemoveFirst<ConstructorParameters<typeof PokemonVariety>>[],
	) {
		this.varieties = varietyData.map(
			(data) => new PokemonVariety(this, ...data),
		);
		PokemonSpecies.map.set(species, this);
	}

	public readonly varieties: PokemonVariety[];

	static map = new Map<Species, PokemonSpecies>();
}
