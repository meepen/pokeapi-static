#!/usr/bin/env node

import {join, resolve} from 'node:path';
import {imageDir} from '../generator/file-structure.js';
import {copyFile, readdir} from 'node:fs/promises';

const args = process.argv.slice(2);

if (args.length < 1) {
	throw new Error('Please provide a command');
}

async function extractImagesTo(outDir: string | undefined) {
	if (!outDir) {
		throw new Error('Please provide an output directory');
	}

	const resolvedDir = resolve(outDir);

	console.log(`Extracting images to ${resolvedDir}`);

	for (const image of await readdir(imageDir)) {
		console.log(`Copying ${image}`);
		await copyFile(join(imageDir, image), join(resolvedDir, image));
	}
}

switch (args[0]) {
	case 'copy-images':
		await extractImagesTo(args[1]);
		break;
	default:
		throw new Error('Unknown command');
}
