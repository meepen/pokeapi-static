import type {
	Name,
	Pokemon,
	PokemonForm,
	PokemonFormSprites,
	PokemonHeldItem,
	PokemonMove,
	PokemonSpecies,
	PokemonSprites,
	PokemonStat,
} from 'pokenode-ts';
import {apiNameToClassName, resourceToId} from '../api-utils.js';
import {type EnumData, createBitsForObject, createEnum} from './enums.js';
import {safe} from './safe.js';
import {imageCache} from '../images/image-cache.js';
import {namesToLocalizations} from './names.js';
import {enumManager} from '../enum.js';
import {writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {generatedDir} from '../file-structure.js';

const formBits: EnumData<PokemonForm> = {
	enumName: 'PokemonFormBits',
	map: {
		is_default: 'Default',
		is_battle_only: 'BattleOnly',
		is_mega: 'Mega',
	},
};

const speciesBits: EnumData<PokemonSpecies> = {
	enumName: 'PokemonSpeciesBits',
	map: {
		is_mythical: 'Mythical',
		is_legendary: 'Legendary',
		is_baby: 'Baby',
		has_gender_differences: 'GenderDifferences',
		forms_switchable: 'FormsSwitchable',
	},
};

const pokemonImports = `// AUTO GENERATED FILE
import {Language} from './language.enum.js';
import {Species} from './species.enum.js';
import {Variety} from './variety.enum.js';
import {Form} from './form.enum.js';
import {Type} from './type.enum.js';
import {VersionGroup} from './version-group.enum.js';
import {Color} from './color.enum.js';
import {EggGroup} from './egg-group.enum.js';
import {Stat} from './stat.enum.js';
import {Item} from './item.enum.js';
import {Ability} from './ability.enum.js';
import {Generation} from './generation.enum.js';
import {GrowthRate} from './growth-rate.enum.js';
import {Shape} from './shape.enum.js';
import {Move} from './move.enum.js';
import {MoveLearnMethod} from './move-learn-method.enum.js';
`;

const pokemonClass = `import type { Localization} from '../localization.js';
import type { Species} from './species.enum.js';
import type { Variety} from './variety.enum.js';
import type { Form} from './form.enum.js';
import type { Type} from './type.enum.js';
import type { VersionGroup} from './version-group.enum.js';
import type { Color} from './color.enum.js';
import type { EggGroup} from './egg-group.enum.js';
import type { Stat} from './stat.enum.js';
import type { Item} from './item.enum.js';
import type { Ability} from './ability.enum.js';
import type { Generation} from './generation.enum.js';
import type { GrowthRate} from './growth-rate.enum.js';
import type { Shape} from './shape.enum.js';
import type { Move} from './move.enum.js';
import type { MoveLearnMethod} from './move-learn-method.enum.js';
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

${createEnum(formBits)}

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
}

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
    this.forms = forms.map(
      (form) =>
        new PokemonForm(
          this,
          ...form,
        ),
    );

    PokemonVariety.map.set(variety, this);
  }

  public readonly forms: PokemonForm[];

  static map = new Map<Variety, PokemonVariety>();
}

${createEnum(speciesBits)}

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
     * Pokémon is \`genderRate / 8\`.
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
    this.varieties = varietyData.map((data) => new PokemonVariety(this, ...data));
    PokemonSpecies.map.set(species, this);
  }

  public readonly varieties: PokemonVariety[];

  static map = new Map<Species, PokemonSpecies>();
}`;

const generationHeader = `${pokemonImports}
import {Version} from './version.enum.js';
import {PokemonSpecies} from './pokemon-species.js';
import type { MoveLearnData} from './pokemon-species.js';

// This is a used to shorten the code by collapsing data into a single line
function move(
	versionGroupMin: VersionGroup,
	versionGroupMax: VersionGroup,
	learnMethod: MoveLearnMethod,
	move: Move,
	levelLearnedAt?: number,
): MoveLearnData {
	return {
		versionGroups: [versionGroupMin, versionGroupMax],
		learnMethod,
		move,
		levelLearnedAt,
	};
}

// This is a used to shorten the code by collapsing moves that have the same general data into a single line
function moves(
	data: Omit<MoveLearnData, 'move'>,
	...moves: Move[]
): MoveLearnData[] {
	return moves.map<MoveLearnData>((move) => ({
		...data,
		move,
	}));
}
`;

async function spritesToData(sprites: PokemonSprites | PokemonFormSprites) {
	const result = [];
	if (sprites.front_default) {
		result.push(
			`frontDefault: ${safe(
				await imageCache.getCachedImagePath(sprites.front_default),
			)},`,
		);
	}

	if (sprites.front_shiny) {
		result.push(
			`frontShiny: ${safe(
				await imageCache.getCachedImagePath(sprites.front_shiny),
			)},`,
		);
	}

	if (sprites.front_female) {
		result.push(
			`frontFemale: ${safe(
				await imageCache.getCachedImagePath(sprites.front_female),
			)},`,
		);
	}

	if (sprites.front_shiny_female) {
		result.push(
			`frontShinyFemale: ${safe(
				await imageCache.getCachedImagePath(sprites.front_shiny_female),
			)},`,
		);
	}

	if (sprites.back_default) {
		result.push(
			`backDefault: ${safe(
				await imageCache.getCachedImagePath(sprites.back_default),
			)},`,
		);
	}

	if (sprites.back_shiny) {
		result.push(
			`backShiny: ${safe(
				await imageCache.getCachedImagePath(sprites.back_shiny),
			)},`,
		);
	}

	if (sprites.back_female) {
		result.push(
			`backFemale: ${safe(
				await imageCache.getCachedImagePath(sprites.back_female),
			)},`,
		);
	}

	if (sprites.back_shiny_female) {
		result.push(
			`backShinyFemale: ${safe(
				await imageCache.getCachedImagePath(sprites.back_shiny_female),
			)},`,
		);
	}

	return `{
    ${result.join('\n    ')}
  }`;
}

function createStatData(stats: PokemonStat[]) {
	return `{${stats
		.map(
			(stat) => `
      [${enumManager.resourceToEnum(stat.stat)}]: { baseStat: ${safe(
				stat.base_stat,
			)},${stat.effort === 0 ? '' : ` effort: ${safe(stat.effort)},`} },`,
		)
		.join('')}
  }`;
}

function createHeldItemData(heldItems: PokemonHeldItem[]) {
	const flatItemVersions = heldItems.flatMap((item) =>
		item.version_details.map((v) => ({
			item: item.item,
			version: v.version,
			rarity: v.rarity,
		})),
	);

	const versions = Array.from(
		new Set(flatItemVersions.map((v) => v.version.url)),
	).map((url) => {
		const version = flatItemVersions.find((v) => v.version.url === url);
		if (!version) {
			throw new Error('Version not found');
		}

		return version;
	});

	return `{${versions
		.map(
			(version) => `
      [${enumManager.resourceToEnum(version.version)}]: {${flatItemVersions
				.filter((item) => item.version.url === version.version.url)
				.map(
					(item) => `
        [${enumManager.resourceToEnum(item.item)}]: ${safe(item.rarity)},`,
				)
				.join('')}
      },`,
		)
		.join('')}
  }`;
}

function createMoveData(moves: PokemonMove[]) {
	const movesAndVersions = moves.flatMap((move) =>
		move.version_group_details.map((version) => ({
			move: move.move,
			levelLearnedAt: version.level_learned_at,
			versionGroups: [
				resourceToId(version.version_group),
				resourceToId(version.version_group),
			],
			learnMethod: version.move_learn_method,
		})),
	);

	movesAndVersions.sort((a, b) => b.versionGroups[0] - a.versionGroups[0]);

	const map = new Map<string, (typeof movesAndVersions)[0]>();
	for (const mv of movesAndVersions) {
		const moveKey = `${mv.move.url}-${mv.learnMethod}-${mv.levelLearnedAt}`;
		const existing = map.get(moveKey);
		const versionId = mv.versionGroups[0];
		if (existing) {
			existing.versionGroups[0] = Math.min(
				versionId,
				existing.versionGroups[0],
			);
			existing.versionGroups[1] = Math.max(
				versionId,
				existing.versionGroups[1],
			);
		} else {
			map.set(moveKey, mv);
		}
	}

	const sameDataForMoves = new Map<string, typeof movesAndVersions>();

	for (const move of movesAndVersions) {
		const key = `${move.versionGroups[0]}-${move.versionGroups[1]}-${move.learnMethod.url}-${move.levelLearnedAt}`;
		const existing = sameDataForMoves.get(key);
		if (existing) {
			existing.push(move);
		} else {
			sameDataForMoves.set(key, [move]);
		}
	}

	return Array.from(sameDataForMoves.entries())
		.map(([, moves]) =>
			moves.length > 1
				? `
				moves(
					{
						versionGroups: [
							${enumManager.getCollapsedEnumName(
								'VersionGroup',
								moves[0].versionGroups[0],
							)},
							${enumManager.getCollapsedEnumName(
								'VersionGroup',
								moves[0].versionGroups[1],
							)},
						],
						learnMethod: ${enumManager.getCollapsedEnumName(
							moves[0].learnMethod,
						)},${
							moves[0].levelLearnedAt === 0
								? ''
								: `
						levelLearnedAt: ${safe(moves[0].levelLearnedAt)},`
						}
					},
					${moves
						.map(
							(m) => `
					${enumManager.resourceToEnum(m.move)}`,
						)
						.join(',')}
				),`
				: `
				move(
					${enumManager.getCollapsedEnumName(
						'VersionGroup',
						moves[0].versionGroups[0],
					)},
					${enumManager.getCollapsedEnumName(
						'VersionGroup',
						moves[0].versionGroups[1],
					)},
					${enumManager.getCollapsedEnumName(moves[0].learnMethod)},
					${enumManager.resourceToEnum(moves[0].move)}${
						moves[0].levelLearnedAt === 0
							? ''
							: `,
					${safe(moves[0].levelLearnedAt)}`
					}
				),`,
		)
		.join('');
}

/**
 * Creates the generated source code for pokemon species, varieties and forms
 * and saves it to files
 * @param pokemonSpecies The pokemon species data
 * @param varieties The pokemon varieties data
 * @param forms The pokemon forms data
 * @returns A list of files that were created
 */
export async function createPokemonData(
	pokemonSpecies: PokemonSpecies[],
	varieties: Pokemon[],
	forms: PokemonForm[],
) {
	// Create the standard file for the classes
	const standardHeader = `${generationHeader}
import {PokemonSpeciesBits, PokemonFormBits} from './pokemon-species.js';
${enumManager.collapseEnumData('VersionGroup')}
${enumManager.collapseEnumData('MoveLearnMethod')}
`;

	// Split into generations
	const generations = new Map<number, PokemonSpecies[]>();

	for (const species of pokemonSpecies) {
		const id = resourceToId(species.generation);
		const generation = generations.get(id);
		if (generation) {
			generation.push(species);
		} else {
			generations.set(id, [species]);
		}
	}

	for (const [generation, species] of generations.entries()) {
		await writeFile(
			join(generatedDir, `pokemon-species-${generation}.ts`),
			`${standardHeader}
${(
	await Promise.all(
		species.map(
			async (species) => `
new PokemonSpecies(
  Species.${apiNameToClassName(species.name)},
  ${safe(species.base_happiness)},
  ${safe(species.capture_rate)},
  ${enumManager.resourceToEnum(species.color)},
  [ ${species.egg_groups
		.map((eggGroup) => enumManager.resourceToEnum(eggGroup))
		.join(', ')} ],
  ${safe(species.gender_rate)},
  ${createBitsForObject(species, speciesBits)},
  ${enumManager.resourceToEnum(species.generation)},
  ${safe(species.hatch_counter)},
  ${enumManager.resourceToEnum(species.growth_rate)},
  ${species.shape ? enumManager.resourceToEnum(species.shape) : 'null'},
  ${namesToLocalizations(species.names)},
  ${namesToLocalizations(
		species.genera.map<Name>((g) => ({language: g.language, name: g.genus})),
	)},
  ${namesToLocalizations(
		species.flavor_text_entries.map<Name>((g) => ({
			language: g.language,
			name: g.flavor_text,
		})),
	)},
  [
    ${(
			await Promise.all(
				species.varieties
					.map((variety) =>
						varieties.find((v) => v.id === resourceToId(variety.pokemon)),
					)
					.filter((v): v is Pokemon => {
						if (!v) {
							throw new Error('Variety not found');
						}
						return true;
					})
					.map(
						async (variety) => `
    [
      Variety.${apiNameToClassName(variety.name)},
      ${safe(variety.base_experience)},
      ${safe(variety.height)},
      ${safe(variety.weight)},
      [${variety.types
				.map((type) => enumManager.resourceToEnum(type.type))
				.join(', ')}],
      ${await spritesToData(variety.sprites)},
      ${createStatData(variety.stats)},
      ${createHeldItemData(variety.held_items)},
			[${createMoveData(variety.moves)}].flat(),
      [${variety.abilities
				.slice(0)
				.sort((a, b) => a.slot - b.slot)
				.map(
					(ability) => `
        {
          ability: ${enumManager.resourceToEnum(ability.ability)},
          isHidden: ${ability.is_hidden},
          slot: ${ability.slot},
        },`,
				)
				.join('')}
      ],
      [${(
				await Promise.all(
					variety.forms
						.map((form) => {
							const formData = forms.find((f) => f.id === resourceToId(form));
							if (!formData) {
								throw new Error('Form not found');
							}
							return formData;
						})
						.map(
							async (form) => `
        [
          Form.${apiNameToClassName(form.name)},
          ${createBitsForObject(form, formBits)},
          ${await spritesToData(form.sprites)},
          [${form.types
						.map((type) => enumManager.resourceToEnum(type.type))
						.join(', ')}],
          ${enumManager.resourceToEnum(form.version_group)},
          ${namesToLocalizations(form.names)},
          ${namesToLocalizations(form.form_names)},
					${form.form_name !== '' ? safe(form.form_name) : ''}
        ],`,
						),
				)
			).join('')}
      ],
    ],`,
					),
			)
		).join('')}
  ],
);`,
		),
	)
).join('')}
  `,
		);
	}

	await writeFile(join(generatedDir, 'pokemon-species.ts'), pokemonClass);

	await writeFile(
		join(generatedDir, 'pokemon-species-data.ts'),
		`${Array.from(generations.keys())
			.map(
				(generation) => `import './pokemon-species-${generation}.js';
`,
			)
			.join('')}`,
	);
}
