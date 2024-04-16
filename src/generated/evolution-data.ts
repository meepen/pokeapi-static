// AUTO GENERATED FILE
import {Species} from './species.enum.js';
import {Gender} from './gender.enum.js';
import {EvolutionTrigger} from './evolution-trigger.enum.js';
import {Item} from './item.enum.js';
import {Move} from './move.enum.js';
import {Type} from './type.enum.js';
import {Location} from './location.enum.js';

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

new Evolution(
	Species.Bulbasaur,
	Species.Ivysaur,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Ivysaur,
	Species.Venusaur,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Charmander,
	Species.Charmeleon,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Charmeleon,
	Species.Charizard,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Squirtle,
	Species.Wartortle,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Wartortle,
	Species.Blastoise,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Caterpie,
	Species.Metapod,
	{minLevel: 7, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Metapod,
	Species.Butterfree,
	{minLevel: 10, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Weedle,
	Species.Kakuna,
	{minLevel: 7, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Kakuna,
	Species.Beedrill,
	{minLevel: 10, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pidgey,
	Species.Pidgeotto,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pidgeotto,
	Species.Pidgeot,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Rattata,
	Species.Raticate,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Rattata,
	Species.Raticate,
	{minLevel: 20, timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Spearow,
	Species.Fearow,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Ekans,
	Species.Arbok,
	{minLevel: 22, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pichu,
	Species.Pikachu,
	{trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Pikachu,
	Species.Raichu,
	{item: Item.ThunderStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Sandshrew,
	Species.Sandslash,
	{minLevel: 22, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Sandshrew,
	Species.Sandslash,
	{item: Item.IceStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.NidoranF,
	Species.Nidorina,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nidorina,
	Species.Nidoqueen,
	{item: Item.MoonStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.NidoranM,
	Species.Nidorino,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nidorino,
	Species.Nidoking,
	{item: Item.MoonStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Cleffa,
	Species.Clefairy,
	{trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Clefairy,
	Species.Clefable,
	{item: Item.MoonStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Vulpix,
	Species.Ninetales,
	{item: Item.FireStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Vulpix,
	Species.Ninetales,
	{item: Item.IceStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Igglybuff,
	Species.Jigglypuff,
	{trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Jigglypuff,
	Species.Wigglytuff,
	{item: Item.MoonStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Zubat,
	Species.Golbat,
	{minLevel: 22, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Golbat,
	Species.Crobat,
	{trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Oddish,
	Species.Gloom,
	{minLevel: 21, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Gloom,
	Species.Vileplume,
	{item: Item.LeafStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Gloom,
	Species.Bellossom,
	{item: Item.SunStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Paras,
	Species.Parasect,
	{minLevel: 24, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Venonat,
	Species.Venomoth,
	{minLevel: 31, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Diglett,
	Species.Dugtrio,
	{minLevel: 26, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Meowth,
	Species.Persian,
	{minLevel: 28, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Meowth,
	Species.Persian,
	{trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Meowth,
	Species.Perrserker,
	{minLevel: 28, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Psyduck,
	Species.Golduck,
	{minLevel: 33, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Mankey,
	Species.Primeape,
	{minLevel: 28, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Primeape,
	Species.Annihilape,
	{trigger: EvolutionTrigger.Other},
	false,
);
new Evolution(
	Species.Growlithe,
	Species.Arcanine,
	{item: Item.FireStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Poliwag,
	Species.Poliwhirl,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Poliwhirl,
	Species.Poliwrath,
	{item: Item.WaterStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Poliwhirl,
	Species.Politoed,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Abra,
	Species.Kadabra,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Kadabra,
	Species.Alakazam,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Machop,
	Species.Machoke,
	{minLevel: 28, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Machoke,
	Species.Machamp,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Bellsprout,
	Species.Weepinbell,
	{minLevel: 21, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Weepinbell,
	Species.Victreebel,
	{item: Item.LeafStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Tentacool,
	Species.Tentacruel,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Geodude,
	Species.Graveler,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Graveler,
	Species.Golem,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Ponyta,
	Species.Rapidash,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Slowpoke,
	Species.Slowbro,
	{minLevel: 37, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Slowpoke,
	Species.Slowbro,
	{item: Item.GalaricaCuff, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Slowpoke,
	Species.Slowking,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Slowpoke,
	Species.Slowking,
	{item: Item.GalaricaWreath, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Magnemite,
	Species.Magneton,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Magneton,
	Species.Magnezone,
	{location: Location.MtCoronet, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Magneton,
	Species.Magnezone,
	{location: Location.ChargestoneCave, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Magneton,
	Species.Magnezone,
	{location: Location.KalosRoute13, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Magneton,
	Species.Magnezone,
	{trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Magneton,
	Species.Magnezone,
	{item: Item.ThunderStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Farfetchd,
	Species.Sirfetchd,
	{trigger: EvolutionTrigger.ThreeCriticalHits},
	false,
);
new Evolution(
	Species.Doduo,
	Species.Dodrio,
	{minLevel: 31, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Seel,
	Species.Dewgong,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Grimer,
	Species.Muk,
	{minLevel: 38, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Shellder,
	Species.Cloyster,
	{item: Item.WaterStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Gastly,
	Species.Haunter,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Haunter,
	Species.Gengar,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Onix,
	Species.Steelix,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Drowzee,
	Species.Hypno,
	{minLevel: 26, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Krabby,
	Species.Kingler,
	{minLevel: 28, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Voltorb,
	Species.Electrode,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Exeggcute,
	Species.Exeggutor,
	{item: Item.LeafStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Cubone,
	Species.Marowak,
	{minLevel: 28, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cubone,
	Species.Marowak,
	{minLevel: 28, timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Tyrogue,
	Species.Hitmonlee,
	{minLevel: 20, relativePhysicalStats: 1, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Tyrogue,
	Species.Hitmonchan,
	{minLevel: 20, relativePhysicalStats: -1, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Tyrogue,
	Species.Hitmontop,
	{minLevel: 20, relativePhysicalStats: 0, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Lickitung,
	Species.Lickilicky,
	{knownMove: Move.Rollout, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Koffing,
	Species.Weezing,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Rhyhorn,
	Species.Rhydon,
	{minLevel: 42, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Rhydon,
	Species.Rhyperior,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Happiny,
	Species.Chansey,
	{timeOfDay: 'day', trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Chansey,
	Species.Blissey,
	{trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Tangela,
	Species.Tangrowth,
	{knownMove: Move.AncientPower, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Horsea,
	Species.Seadra,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Seadra,
	Species.Kingdra,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Goldeen,
	Species.Seaking,
	{minLevel: 33, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Staryu,
	Species.Starmie,
	{item: Item.WaterStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.MimeJr,
	Species.MrMime,
	{knownMove: Move.Mimic, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.MrMime,
	Species.MrRime,
	{minLevel: 42, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Scyther,
	Species.Scizor,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Scyther,
	Species.Kleavor,
	{item: Item.BlackAugurite, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Smoochum,
	Species.Jynx,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Elekid,
	Species.Electabuzz,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Electabuzz,
	Species.Electivire,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Magby,
	Species.Magmar,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Magmar,
	Species.Magmortar,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Magikarp,
	Species.Gyarados,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Vaporeon,
	{item: Item.WaterStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Jolteon,
	{item: Item.ThunderStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Flareon,
	{item: Item.FireStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Espeon,
	{timeOfDay: 'day', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Umbreon,
	{timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Leafeon,
	{location: Location.EternaForest, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Leafeon,
	{location: Location.PinwheelForest, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Leafeon,
	{location: Location.KalosRoute20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Leafeon,
	{item: Item.LeafStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Glaceon,
	{location: Location.SinnohRoute217, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Glaceon,
	{location: Location.TwistMountain, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Glaceon,
	{location: Location.FrostCavern, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Glaceon,
	{item: Item.IceStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Sylveon,
	{
		knownMoveType: Type.Fairy,
		minAffection: 2,
		trigger: EvolutionTrigger.LevelUp,
	},
	false,
);
new Evolution(
	Species.Eevee,
	Species.Sylveon,
	{knownMoveType: Type.Fairy, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Porygon,
	Species.Porygon2,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Porygon2,
	Species.PorygonZ,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Omanyte,
	Species.Omastar,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Kabuto,
	Species.Kabutops,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Munchlax,
	Species.Snorlax,
	{trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Dratini,
	Species.Dragonair,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Dragonair,
	Species.Dragonite,
	{minLevel: 55, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Chikorita,
	Species.Bayleef,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Bayleef,
	Species.Meganium,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cyndaquil,
	Species.Quilava,
	{minLevel: 14, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Quilava,
	Species.Typhlosion,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Totodile,
	Species.Croconaw,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Croconaw,
	Species.Feraligatr,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Sentret,
	Species.Furret,
	{minLevel: 15, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Hoothoot,
	Species.Noctowl,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Ledyba,
	Species.Ledian,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Spinarak,
	Species.Ariados,
	{minLevel: 22, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Chinchou,
	Species.Lanturn,
	{minLevel: 27, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Togepi,
	Species.Togetic,
	{trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Togetic,
	Species.Togekiss,
	{item: Item.ShinyStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Natu,
	Species.Xatu,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Mareep,
	Species.Flaaffy,
	{minLevel: 15, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Flaaffy,
	Species.Ampharos,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Azurill,
	Species.Marill,
	{trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Marill,
	Species.Azumarill,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Bonsly,
	Species.Sudowoodo,
	{knownMove: Move.Mimic, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Hoppip,
	Species.Skiploom,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Skiploom,
	Species.Jumpluff,
	{minLevel: 27, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Aipom,
	Species.Ambipom,
	{knownMove: Move.DoubleHit, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Sunkern,
	Species.Sunflora,
	{item: Item.SunStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Yanma,
	Species.Yanmega,
	{knownMove: Move.AncientPower, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Wooper,
	Species.Quagsire,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Wooper,
	Species.Clodsire,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Murkrow,
	Species.Honchkrow,
	{item: Item.DuskStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Misdreavus,
	Species.Mismagius,
	{item: Item.DuskStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Wynaut,
	Species.Wobbuffet,
	{minLevel: 15, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Girafarig,
	Species.Farigiraf,
	{knownMove: Move.TwinBeam, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pineco,
	Species.Forretress,
	{minLevel: 31, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Dunsparce,
	Species.Dudunsparce,
	{knownMove: Move.HyperDrill, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Gligar,
	Species.Gliscor,
	{timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Snubbull,
	Species.Granbull,
	{minLevel: 23, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Qwilfish,
	Species.Overqwil,
	{knownMove: Move.BarbBarrage, trigger: EvolutionTrigger.StrongStyleMove},
	false,
);
new Evolution(
	Species.Sneasel,
	Species.Weavile,
	{timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Sneasel,
	Species.Sneasler,
	{timeOfDay: 'day', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Teddiursa,
	Species.Ursaring,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Ursaring,
	Species.Ursaluna,
	{
		item: Item.PeatBlock,
		timeOfDay: 'full-moon',
		trigger: EvolutionTrigger.UseItem,
	},
	false,
);
new Evolution(
	Species.Slugma,
	Species.Magcargo,
	{minLevel: 38, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Swinub,
	Species.Piloswine,
	{minLevel: 33, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Piloswine,
	Species.Mamoswine,
	{knownMove: Move.AncientPower, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Corsola,
	Species.Cursola,
	{minLevel: 38, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Remoraid,
	Species.Octillery,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Mantyke,
	Species.Mantine,
	{partySpecies: Species.Remoraid, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Houndour,
	Species.Houndoom,
	{minLevel: 24, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Phanpy,
	Species.Donphan,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Stantler,
	Species.Wyrdeer,
	{knownMove: Move.PsyshieldBash, trigger: EvolutionTrigger.AgileStyleMove},
	false,
);
new Evolution(
	Species.Larvitar,
	Species.Pupitar,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pupitar,
	Species.Tyranitar,
	{minLevel: 55, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Treecko,
	Species.Grovyle,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Grovyle,
	Species.Sceptile,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Torchic,
	Species.Combusken,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Combusken,
	Species.Blaziken,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Mudkip,
	Species.Marshtomp,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Marshtomp,
	Species.Swampert,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Poochyena,
	Species.Mightyena,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Zigzagoon,
	Species.Linoone,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Linoone,
	Species.Obstagoon,
	{minLevel: 35, timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Wurmple,
	Species.Silcoon,
	{minLevel: 7, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Wurmple,
	Species.Cascoon,
	{minLevel: 7, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Silcoon,
	Species.Beautifly,
	{minLevel: 10, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cascoon,
	Species.Dustox,
	{minLevel: 10, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Lotad,
	Species.Lombre,
	{minLevel: 14, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Lombre,
	Species.Ludicolo,
	{item: Item.WaterStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Seedot,
	Species.Nuzleaf,
	{minLevel: 14, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nuzleaf,
	Species.Shiftry,
	{item: Item.LeafStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Taillow,
	Species.Swellow,
	{minLevel: 22, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Wingull,
	Species.Pelipper,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Ralts,
	Species.Kirlia,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Kirlia,
	Species.Gardevoir,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Kirlia,
	Species.Gallade,
	{
		gender: Gender.Male,
		item: Item.DawnStone,
		trigger: EvolutionTrigger.UseItem,
	},
	false,
);
new Evolution(
	Species.Surskit,
	Species.Masquerain,
	{minLevel: 22, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Shroomish,
	Species.Breloom,
	{minLevel: 23, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Slakoth,
	Species.Vigoroth,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Vigoroth,
	Species.Slaking,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nincada,
	Species.Ninjask,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nincada,
	Species.Shedinja,
	{trigger: EvolutionTrigger.Shed},
	false,
);
new Evolution(
	Species.Whismur,
	Species.Loudred,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Loudred,
	Species.Exploud,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Makuhita,
	Species.Hariyama,
	{minLevel: 24, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nosepass,
	Species.Probopass,
	{location: Location.MtCoronet, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nosepass,
	Species.Probopass,
	{location: Location.ChargestoneCave, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nosepass,
	Species.Probopass,
	{location: Location.KalosRoute13, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nosepass,
	Species.Probopass,
	{trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Skitty,
	Species.Delcatty,
	{item: Item.MoonStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Aron,
	Species.Lairon,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Lairon,
	Species.Aggron,
	{minLevel: 42, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Meditite,
	Species.Medicham,
	{minLevel: 37, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Electrike,
	Species.Manectric,
	{minLevel: 26, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Budew,
	Species.Roselia,
	{timeOfDay: 'day', trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Roselia,
	Species.Roserade,
	{item: Item.ShinyStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Gulpin,
	Species.Swalot,
	{minLevel: 26, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Carvanha,
	Species.Sharpedo,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Wailmer,
	Species.Wailord,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Numel,
	Species.Camerupt,
	{minLevel: 33, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Spoink,
	Species.Grumpig,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Trapinch,
	Species.Vibrava,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Vibrava,
	Species.Flygon,
	{minLevel: 45, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cacnea,
	Species.Cacturne,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Swablu,
	Species.Altaria,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Barboach,
	Species.Whiscash,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Corphish,
	Species.Crawdaunt,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Baltoy,
	Species.Claydol,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Lileep,
	Species.Cradily,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Anorith,
	Species.Armaldo,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Feebas,
	Species.Milotic,
	{minBeauty: 171, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Feebas,
	Species.Milotic,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Feebas,
	Species.Milotic,
	{minBeauty: 170, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Shuppet,
	Species.Banette,
	{minLevel: 37, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Duskull,
	Species.Dusclops,
	{minLevel: 37, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Dusclops,
	Species.Dusknoir,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Chingling,
	Species.Chimecho,
	{timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Snorunt,
	Species.Glalie,
	{minLevel: 42, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Snorunt,
	Species.Froslass,
	{
		gender: Gender.Female,
		item: Item.DawnStone,
		trigger: EvolutionTrigger.UseItem,
	},
	false,
);
new Evolution(
	Species.Spheal,
	Species.Sealeo,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Sealeo,
	Species.Walrein,
	{minLevel: 44, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Clamperl,
	Species.Huntail,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Clamperl,
	Species.Gorebyss,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Bagon,
	Species.Shelgon,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Shelgon,
	Species.Salamence,
	{minLevel: 50, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Beldum,
	Species.Metang,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Metang,
	Species.Metagross,
	{minLevel: 45, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Turtwig,
	Species.Grotle,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Grotle,
	Species.Torterra,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Chimchar,
	Species.Monferno,
	{minLevel: 14, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Monferno,
	Species.Infernape,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Piplup,
	Species.Prinplup,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Prinplup,
	Species.Empoleon,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Starly,
	Species.Staravia,
	{minLevel: 14, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Staravia,
	Species.Staraptor,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Bidoof,
	Species.Bibarel,
	{minLevel: 15, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Kricketot,
	Species.Kricketune,
	{minLevel: 10, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Shinx,
	Species.Luxio,
	{minLevel: 15, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Luxio,
	Species.Luxray,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cranidos,
	Species.Rampardos,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Shieldon,
	Species.Bastiodon,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Burmy,
	Species.Wormadam,
	{gender: Gender.Female, minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Burmy,
	Species.Mothim,
	{gender: Gender.Male, minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Combee,
	Species.Vespiquen,
	{gender: Gender.Female, minLevel: 21, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Buizel,
	Species.Floatzel,
	{minLevel: 26, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cherubi,
	Species.Cherrim,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Shellos,
	Species.Gastrodon,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Drifloon,
	Species.Drifblim,
	{minLevel: 28, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Buneary,
	Species.Lopunny,
	{trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Glameow,
	Species.Purugly,
	{minLevel: 38, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Stunky,
	Species.Skuntank,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Bronzor,
	Species.Bronzong,
	{minLevel: 33, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Gible,
	Species.Gabite,
	{minLevel: 24, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Gabite,
	Species.Garchomp,
	{minLevel: 48, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Riolu,
	Species.Lucario,
	{timeOfDay: 'day', trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Hippopotas,
	Species.Hippowdon,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Skorupi,
	Species.Drapion,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Croagunk,
	Species.Toxicroak,
	{minLevel: 37, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Finneon,
	Species.Lumineon,
	{minLevel: 31, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Snover,
	Species.Abomasnow,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Snivy,
	Species.Servine,
	{minLevel: 17, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Servine,
	Species.Serperior,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Tepig,
	Species.Pignite,
	{minLevel: 17, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pignite,
	Species.Emboar,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Oshawott,
	Species.Dewott,
	{minLevel: 17, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Dewott,
	Species.Samurott,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Patrat,
	Species.Watchog,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Lillipup,
	Species.Herdier,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Herdier,
	Species.Stoutland,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Purrloin,
	Species.Liepard,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pansage,
	Species.Simisage,
	{item: Item.LeafStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Pansear,
	Species.Simisear,
	{item: Item.FireStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Panpour,
	Species.Simipour,
	{item: Item.WaterStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Munna,
	Species.Musharna,
	{item: Item.MoonStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Pidove,
	Species.Tranquill,
	{minLevel: 21, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Tranquill,
	Species.Unfezant,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Blitzle,
	Species.Zebstrika,
	{minLevel: 27, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Roggenrola,
	Species.Boldore,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Boldore,
	Species.Gigalith,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Woobat,
	Species.Swoobat,
	{trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Drilbur,
	Species.Excadrill,
	{minLevel: 31, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Timburr,
	Species.Gurdurr,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Gurdurr,
	Species.Conkeldurr,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Tympole,
	Species.Palpitoad,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Palpitoad,
	Species.Seismitoad,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Sewaddle,
	Species.Swadloon,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Swadloon,
	Species.Leavanny,
	{trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Venipede,
	Species.Whirlipede,
	{minLevel: 22, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Whirlipede,
	Species.Scolipede,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cottonee,
	Species.Whimsicott,
	{item: Item.SunStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Petilil,
	Species.Lilligant,
	{item: Item.SunStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Basculin,
	Species.Basculegion,
	{trigger: EvolutionTrigger.RecoilDamage},
	false,
);
new Evolution(
	Species.Sandile,
	Species.Krokorok,
	{minLevel: 29, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Krokorok,
	Species.Krookodile,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Darumaka,
	Species.Darmanitan,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Darumaka,
	Species.Darmanitan,
	{item: Item.IceStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Dwebble,
	Species.Crustle,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Scraggy,
	Species.Scrafty,
	{minLevel: 39, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Yamask,
	Species.Cofagrigus,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Yamask,
	Species.Runerigus,
	{trigger: EvolutionTrigger.TakeDamage},
	false,
);
new Evolution(
	Species.Tirtouga,
	Species.Carracosta,
	{minLevel: 37, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Archen,
	Species.Archeops,
	{minLevel: 37, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Trubbish,
	Species.Garbodor,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Zorua,
	Species.Zoroark,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Minccino,
	Species.Cinccino,
	{item: Item.ShinyStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Gothita,
	Species.Gothorita,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Gothorita,
	Species.Gothitelle,
	{minLevel: 41, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Solosis,
	Species.Duosion,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Duosion,
	Species.Reuniclus,
	{minLevel: 41, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Ducklett,
	Species.Swanna,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Vanillite,
	Species.Vanillish,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Vanillish,
	Species.Vanilluxe,
	{minLevel: 47, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Deerling,
	Species.Sawsbuck,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Karrablast,
	Species.Escavalier,
	{tradeSpecies: Species.Shelmet, trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Foongus,
	Species.Amoonguss,
	{minLevel: 39, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Frillish,
	Species.Jellicent,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Joltik,
	Species.Galvantula,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Ferroseed,
	Species.Ferrothorn,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Klink,
	Species.Klang,
	{minLevel: 38, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Klang,
	Species.Klinklang,
	{minLevel: 49, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Tynamo,
	Species.Eelektrik,
	{minLevel: 39, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Eelektrik,
	Species.Eelektross,
	{item: Item.ThunderStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Elgyem,
	Species.Beheeyem,
	{minLevel: 42, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Litwick,
	Species.Lampent,
	{minLevel: 41, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Lampent,
	Species.Chandelure,
	{item: Item.DuskStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Axew,
	Species.Fraxure,
	{minLevel: 38, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Fraxure,
	Species.Haxorus,
	{minLevel: 48, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cubchoo,
	Species.Beartic,
	{minLevel: 37, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Shelmet,
	Species.Accelgor,
	{tradeSpecies: Species.Karrablast, trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Mienfoo,
	Species.Mienshao,
	{minLevel: 50, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Golett,
	Species.Golurk,
	{minLevel: 43, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pawniard,
	Species.Bisharp,
	{minLevel: 52, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Bisharp,
	Species.Kingambit,
	{trigger: EvolutionTrigger.Other},
	false,
);
new Evolution(
	Species.Rufflet,
	Species.Braviary,
	{minLevel: 54, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Vullaby,
	Species.Mandibuzz,
	{minLevel: 54, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Deino,
	Species.Zweilous,
	{minLevel: 50, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Zweilous,
	Species.Hydreigon,
	{minLevel: 64, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Larvesta,
	Species.Volcarona,
	{minLevel: 59, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Chespin,
	Species.Quilladin,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Quilladin,
	Species.Chesnaught,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Fennekin,
	Species.Braixen,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Braixen,
	Species.Delphox,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Froakie,
	Species.Frogadier,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Frogadier,
	Species.Greninja,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Bunnelby,
	Species.Diggersby,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Fletchling,
	Species.Fletchinder,
	{minLevel: 17, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Fletchinder,
	Species.Talonflame,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Scatterbug,
	Species.Spewpa,
	{minLevel: 9, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Spewpa,
	Species.Vivillon,
	{minLevel: 12, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Litleo,
	Species.Pyroar,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Flabebe,
	Species.Floette,
	{minLevel: 19, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Floette,
	Species.Florges,
	{item: Item.ShinyStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Skiddo,
	Species.Gogoat,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pancham,
	Species.Pangoro,
	{minLevel: 32, partyType: Type.Dark, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Espurr,
	Species.Meowstic,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Honedge,
	Species.Doublade,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Doublade,
	Species.Aegislash,
	{item: Item.DuskStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Spritzee,
	Species.Aromatisse,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Swirlix,
	Species.Slurpuff,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Inkay,
	Species.Malamar,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp, turnUpsideDown: true},
	false,
);
new Evolution(
	Species.Binacle,
	Species.Barbaracle,
	{minLevel: 39, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Skrelp,
	Species.Dragalge,
	{minLevel: 48, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Clauncher,
	Species.Clawitzer,
	{minLevel: 37, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Helioptile,
	Species.Heliolisk,
	{item: Item.SunStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Tyrunt,
	Species.Tyrantrum,
	{minLevel: 39, timeOfDay: 'day', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Amaura,
	Species.Aurorus,
	{minLevel: 39, timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Goomy,
	Species.Sliggoo,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Sliggoo,
	Species.Goodra,
	{minLevel: 50, needsOverworldRain: true, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Phantump,
	Species.Trevenant,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Pumpkaboo,
	Species.Gourgeist,
	{trigger: EvolutionTrigger.Trade},
	false,
);
new Evolution(
	Species.Bergmite,
	Species.Avalugg,
	{minLevel: 37, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Noibat,
	Species.Noivern,
	{minLevel: 48, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Rowlet,
	Species.Dartrix,
	{minLevel: 17, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Dartrix,
	Species.Decidueye,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Litten,
	Species.Torracat,
	{minLevel: 17, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Torracat,
	Species.Incineroar,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Popplio,
	Species.Brionne,
	{minLevel: 17, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Brionne,
	Species.Primarina,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pikipek,
	Species.Trumbeak,
	{minLevel: 14, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Trumbeak,
	Species.Toucannon,
	{minLevel: 28, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Yungoos,
	Species.Gumshoos,
	{minLevel: 20, timeOfDay: 'day', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Grubbin,
	Species.Charjabug,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Charjabug,
	Species.Vikavolt,
	{trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Charjabug,
	Species.Vikavolt,
	{item: Item.ThunderStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Crabrawler,
	Species.Crabominable,
	{location: Location.MountLanakila, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cutiefly,
	Species.Ribombee,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Rockruff,
	Species.Lycanroc,
	{minLevel: 25, timeOfDay: 'day', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Rockruff,
	Species.Lycanroc,
	{minLevel: 25, timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Rockruff,
	Species.Lycanroc,
	{minLevel: 25, timeOfDay: 'dusk', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Mareanie,
	Species.Toxapex,
	{minLevel: 38, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Mudbray,
	Species.Mudsdale,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Dewpider,
	Species.Araquanid,
	{minLevel: 22, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Fomantis,
	Species.Lurantis,
	{minLevel: 34, timeOfDay: 'day', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Morelull,
	Species.Shiinotic,
	{minLevel: 24, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Salandit,
	Species.Salazzle,
	{gender: Gender.Female, minLevel: 33, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Stufful,
	Species.Bewear,
	{minLevel: 27, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Bounsweet,
	Species.Steenee,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Steenee,
	Species.Tsareena,
	{knownMove: Move.Stomp, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Wimpod,
	Species.Golisopod,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Sandygast,
	Species.Palossand,
	{minLevel: 42, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.TypeNull,
	Species.Silvally,
	{trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.JangmoO,
	Species.HakamoO,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.HakamoO,
	Species.KommoO,
	{minLevel: 45, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cosmog,
	Species.Cosmoem,
	{minLevel: 43, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cosmoem,
	Species.Solgaleo,
	{minLevel: 53, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cosmoem,
	Species.Lunala,
	{minLevel: 53, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Poipole,
	Species.Naganadel,
	{knownMove: Move.DragonPulse, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Grookey,
	Species.Thwackey,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Thwackey,
	Species.Rillaboom,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Scorbunny,
	Species.Raboot,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Raboot,
	Species.Cinderace,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Sobble,
	Species.Drizzile,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Drizzile,
	Species.Inteleon,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Skwovet,
	Species.Greedent,
	{minLevel: 24, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Rookidee,
	Species.Corvisquire,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Corvisquire,
	Species.Corviknight,
	{minLevel: 38, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Blipbug,
	Species.Dottler,
	{minLevel: 10, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Dottler,
	Species.Orbeetle,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nickit,
	Species.Thievul,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Gossifleur,
	Species.Eldegoss,
	{minLevel: 20, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Wooloo,
	Species.Dubwool,
	{minLevel: 24, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Chewtle,
	Species.Drednaw,
	{minLevel: 22, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Yamper,
	Species.Boltund,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Rolycoly,
	Species.Carkol,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Carkol,
	Species.Coalossal,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Applin,
	Species.Flapple,
	{item: Item.TartApple, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Applin,
	Species.Appletun,
	{item: Item.SweetApple, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Silicobra,
	Species.Sandaconda,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Arrokuda,
	Species.Barraskewda,
	{minLevel: 26, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Toxel,
	Species.Toxtricity,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	true,
);
new Evolution(
	Species.Sizzlipede,
	Species.Centiskorch,
	{minLevel: 28, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Clobbopus,
	Species.Grapploct,
	{knownMove: Move.Taunt, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Sinistea,
	Species.Polteageist,
	{item: Item.CrackedPot, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Hatenna,
	Species.Hattrem,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Hattrem,
	Species.Hatterene,
	{minLevel: 42, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Impidimp,
	Species.Morgrem,
	{minLevel: 32, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Morgrem,
	Species.Grimmsnarl,
	{minLevel: 42, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Milcery,
	Species.Alcremie,
	{trigger: EvolutionTrigger.Spin},
	false,
);
new Evolution(
	Species.Snom,
	Species.Frosmoth,
	{timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cufant,
	Species.Copperajah,
	{minLevel: 34, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Dreepy,
	Species.Drakloak,
	{minLevel: 50, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Drakloak,
	Species.Dragapult,
	{minLevel: 60, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Kubfu,
	Species.Urshifu,
	{trigger: EvolutionTrigger.TowerOfDarkness},
	false,
);
new Evolution(
	Species.Kubfu,
	Species.Urshifu,
	{trigger: EvolutionTrigger.TowerOfWaters},
	false,
);
new Evolution(
	Species.Sprigatito,
	Species.Floragato,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Floragato,
	Species.Meowscarada,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Fuecoco,
	Species.Crocalor,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Crocalor,
	Species.Skeledirge,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Quaxly,
	Species.Quaxwell,
	{minLevel: 16, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Quaxwell,
	Species.Quaquaval,
	{minLevel: 36, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Lechonk,
	Species.Oinkologne,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Tarountula,
	Species.Spidops,
	{minLevel: 15, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nymble,
	Species.Lokix,
	{minLevel: 24, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pawmi,
	Species.Pawmo,
	{minLevel: 18, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Pawmo,
	Species.Pawmot,
	{trigger: EvolutionTrigger.Other},
	false,
);
new Evolution(
	Species.Tandemaus,
	Species.Maushold,
	{minLevel: 25, trigger: EvolutionTrigger.Other},
	false,
);
new Evolution(
	Species.Fidough,
	Species.Dachsbun,
	{minLevel: 26, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Smoliv,
	Species.Dolliv,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Dolliv,
	Species.Arboliva,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Nacli,
	Species.Naclstack,
	{minLevel: 24, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Naclstack,
	Species.Garganacl,
	{minLevel: 38, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Charcadet,
	Species.Armarouge,
	{item: Item.AuspiciousArmor, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Charcadet,
	Species.Ceruledge,
	{item: Item.MaliciousArmor, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Tadbulb,
	Species.Bellibolt,
	{item: Item.ThunderStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Wattrel,
	Species.Kilowattrel,
	{minLevel: 25, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Maschiff,
	Species.Mabosstiff,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Shroodle,
	Species.Grafaiai,
	{minLevel: 28, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Bramblin,
	Species.Brambleghast,
	{trigger: EvolutionTrigger.Other},
	false,
);
new Evolution(
	Species.Toedscool,
	Species.Toedscruel,
	{minLevel: 30, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Capsakid,
	Species.Scovillain,
	{item: Item.FireStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Rellor,
	Species.Rabsca,
	{trigger: EvolutionTrigger.Other},
	false,
);
new Evolution(
	Species.Flittle,
	Species.Espathra,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Tinkatink,
	Species.Tinkatuff,
	{minLevel: 24, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Tinkatuff,
	Species.Tinkaton,
	{minLevel: 38, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Wiglett,
	Species.Wugtrio,
	{minLevel: 26, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Finizen,
	Species.Palafin,
	{minLevel: 38, trigger: EvolutionTrigger.Other},
	false,
);
new Evolution(
	Species.Varoom,
	Species.Revavroom,
	{minLevel: 40, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Glimmet,
	Species.Glimmora,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Greavard,
	Species.Houndstone,
	{minLevel: 30, timeOfDay: 'night', trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Cetoddle,
	Species.Cetitan,
	{item: Item.IceStone, trigger: EvolutionTrigger.UseItem},
	false,
);
new Evolution(
	Species.Frigibax,
	Species.Arctibax,
	{minLevel: 35, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Arctibax,
	Species.Baxcalibur,
	{minLevel: 54, trigger: EvolutionTrigger.LevelUp},
	false,
);
new Evolution(
	Species.Gimmighoul,
	Species.Gholdengo,
	{trigger: EvolutionTrigger.Other},
	false,
);
