import {mkdir, stat, writeFile} from 'node:fs/promises';
import {dirname, extname, resolve} from 'node:path';
import {imageDir} from '../file-structure.js';
import {type LocalCache, localCache} from '../local-cache.js';
import {createHash} from 'node:crypto';

export class ImageCache {
	constructor(private readonly localCache: LocalCache) {}

	/**
	 * Retrieves an image from a URL and caches it
	 * @param url The URL of the image to cache
	 * @returns The path to the cached image relative to the image cache directory
	 */
	async getCachedImagePath(url: string): Promise<string> {
		const urlPath = this.urlToPaths(url);

		const cachedPath = await this.localCache.getImagePath(urlPath);
		if (cachedPath !== null) {
			try {
				await stat(resolve(imageDir, cachedPath));
				return cachedPath;
			} catch (e) {
				console.error('Cached image does not exist:', cachedPath);
				this.localCache.setImagePath(urlPath, null);
			}
		}

		const resolvedPath = await this.downloadImage(url);

		await this.localCache.setImagePath(urlPath, resolvedPath);

		return resolvedPath;
	}

	private urlToPaths(url: string) {
		const urlPath = new URL(url).pathname.slice(1); // Remove leading '/'

		return urlPath;
	}

	private async downloadImage(url: string): Promise<string> {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Failed to download image: ${res.statusText}`);
		}

		await mkdir(imageDir, {recursive: true});

		const buf = Buffer.from(await res.arrayBuffer());

		const hash = createHash('sha256').update(buf).digest('hex').slice(0, 8);

		const targetFileName = `${hash}${extname(url)}`;

		const targetPath = resolve(imageDir, targetFileName);

		console.log('Downloading', url, 'to', targetPath);
		await writeFile(targetPath, buf);

		return targetFileName;
	}
}

export const imageCache = new ImageCache(localCache);
