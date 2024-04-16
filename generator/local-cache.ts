import sqlite3, {type Database} from 'sqlite3';
import {dbPath} from './file-structure.js';

export class LocalCache {
	private constructor(private readonly db: Database) {}

	private run(sql: string) {
		return new Promise<void>((res, rej) => {
			this.db.run(sql, (err) => {
				if (err) {
					rej(err);
				} else {
					res();
				}
			});
		});
	}

	get<T>(key: string) {
		return new Promise<T | null>((res, rej) => {
			this.db.get(
				'SELECT value FROM cache WHERE key = ?',
				[key],
				(err, row) => {
					if (err) {
						rej(err);
					} else {
						if (row) {
							res(JSON.parse((row as {value: string}).value) as T);
						} else {
							res(null);
						}
					}
				},
			);
		});
	}

	set(key: string, value: unknown) {
		return new Promise<void>((res, rej) => {
			this.db.run(
				'INSERT INTO cache (key, value) VALUES (?, ?)',
				[key, JSON.stringify(value)],
				(err) => {
					if (err) {
						rej(err);
					} else {
						res();
					}
				},
			);
		});
	}

	getImagePath(url: string) {
		return new Promise<string | null>((res, rej) => {
			this.db.get(
				'SELECT path FROM images WHERE url = ?',
				[url],
				(err, row) => {
					if (err) {
						rej(err);
					} else {
						if (row) {
							res((row as {path: string}).path);
						} else {
							res(null);
						}
					}
				},
			);
		});
	}

	setImagePath(url: string, path: string | null) {
		return new Promise<void>((res, rej) => {
			if (path) {
				this.db.run(
					'INSERT INTO images (url, path) VALUES (?, ?)',
					[url, path],
					(err) => {
						if (err) {
							rej(err);
						} else {
							res();
						}
					},
				);
			} else {
				this.db.run('DELETE FROM images WHERE url = ?', [url], (err) => {
					if (err) {
						rej(err);
					} else {
						res();
					}
				});
			}
		});
	}

	static async create() {
		const db = await new Promise<Database>((res, rej) => {
			const datab = new sqlite3.Database(dbPath, (err) => {
				if (err) {
					rej(err);
				} else {
					res(datab);
				}
			});
		});

		const cache = new LocalCache(db);

		await cache.run('PRAGMA journal_mode = WAL');
		await cache.run('PRAGMA synchronous = NORMAL');

		await cache.run(
			`CREATE TABLE IF NOT EXISTS cache (
        key TEXT PRIMARY KEY,
        value BLOB NOT NULL
      );`,
		);

		await cache.run(
			`CREATE TABLE IF NOT EXISTS images (
        url TEXT PRIMARY KEY,
        path TEXT NOT NULL
      );`,
		);

		return cache;
	}
}

export const localCache = await LocalCache.create();
