import {
	PokemonClient,
	MoveClient,
	GameClient,
	EvolutionClient,
	ItemClient,
	MachineClient,
	UtilityClient,
	LocationClient,
} from 'pokenode-ts';
import {type LocalCache, localCache} from './local-cache.js';

export class PokemonClientLocalCache {
	private readonly cache = new Map<string, unknown>();
	private readonly client = new PokemonClient();
	private readonly movesClient = new MoveClient();
	private readonly gameClient = new GameClient();
	private readonly evolutionClient = new EvolutionClient();
	private readonly itemClient = new ItemClient();
	private readonly machineClient = new MachineClient();
	private readonly utilityClient = new UtilityClient();
	private readonly locationClient = new LocationClient();

	constructor(private localCache: LocalCache) {}

	private async readKey<T>(key: string) {
		return await this.localCache.get<T>(key);
	}

	private async writeKey(key: string, value: unknown) {
		await this.localCache.set(key, value);
	}

	private async fetchFrom<
		T extends {constructor: {readonly name: string}},
		Key extends keyof T,
		Args extends unknown[],
		MethodType extends (...args: Args) => Promise<unknown> = T[Key] extends (
			...args: Args
		) => Promise<unknown>
			? T[Key]
			: never,
		RetType = Awaited<ReturnType<MethodType>>,
	>(
		client: T,
		key: Key,
		...args: Args & Parameters<MethodType>
	): Promise<RetType> {
		const arg = [client.constructor.name, key, ...args].map(String).join('-');

		const cachedData = this.cache.get(arg);
		if (cachedData) {
			return cachedData as RetType;
		}

		const fileData = await this.readKey<RetType>(arg);
		if (fileData !== null) {
			this.cache.set(arg, fileData);
			return fileData;
		}

		const f = client[key] as MethodType;
		const res = (await f.apply(this.client, args)) as RetType;

		this.cache.set(arg, res);
		await this.writeKey(arg, res);

		return res;
	}

	fetch<Key extends keyof PokemonClient>(
		key: Key,
		...args: Parameters<PokemonClient[Key]>
	) {
		return this.fetchFrom(this.client, key, ...args);
	}

	fetchMoves<Key extends keyof MoveClient>(
		key: Key,
		...args: Parameters<MoveClient[Key]>
	) {
		return this.fetchFrom(this.movesClient, key, ...args);
	}

	fetchGame<Key extends keyof GameClient>(
		key: Key,
		...args: Parameters<GameClient[Key]>
	) {
		return this.fetchFrom(this.gameClient, key, ...args);
	}

	fetchEvolution<Key extends keyof EvolutionClient>(
		key: Key,
		...args: Parameters<EvolutionClient[Key]>
	) {
		return this.fetchFrom(this.evolutionClient, key, ...args);
	}

	fetchItem<Key extends keyof ItemClient>(
		key: Key,
		...args: Parameters<ItemClient[Key]>
	) {
		return this.fetchFrom(this.itemClient, key, ...args);
	}

	fetchMachine<Key extends keyof MachineClient>(
		key: Key,
		...args: Parameters<MachineClient[Key]>
	) {
		return this.fetchFrom(this.machineClient, key, ...args);
	}

	fetchUtility<Key extends keyof UtilityClient>(
		key: Key,
		...args: Parameters<UtilityClient[Key]>
	) {
		return this.fetchFrom(this.utilityClient, key, ...args);
	}

	fetchLocation<Key extends keyof LocationClient>(
		key: Key,
		...args: Parameters<LocationClient[Key]>
	) {
		return this.fetchFrom(this.locationClient, key, ...args);
	}
}

export const client = new PokemonClientLocalCache(localCache);
