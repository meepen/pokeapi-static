import {minify} from 'uglify-js';
import {glob} from 'glob';
import {readFile, writeFile} from 'node:fs/promises';

const files = await glob('src/**/*.js');

for (const file of files) {
	if (file.endsWith('bin.js')) {
		continue;
	}
	console.log(`Minifying ${file}...`);

	const result = minify(await readFile(file, 'utf8'), {
		sourceMap: {
			content: 'inline',
		},
		compress: {
			module: true,
		},
		mangle: {
			toplevel: true,
			keep_fnames: true,
		},
	});

	if (result.error) {
		throw result.error;
	}

	for (const warning of result.warnings ?? []) {
		console.warn(warning);
	}

	await writeFile(file, result.code);
	await writeFile(`${file}.map`, result.map);
}
