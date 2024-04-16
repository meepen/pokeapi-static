import {mkdir} from 'node:fs/promises';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

export const baseDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const cacheDir = join(baseDir, 'cache');
export const dbPath = join(cacheDir, 'pokeapi.db');

export const srcDir = join(baseDir, 'src/generated');
export const generatedDir = srcDir;
export const imageDir = join(cacheDir, 'images');

export async function createDirectories() {
	for (const dir of [cacheDir, srcDir, generatedDir, imageDir]) {
		await mkdir(dir, {recursive: true});
	}
}
