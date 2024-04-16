import type {Name} from 'pokenode-ts';
import {safe} from './safe.js';
import {enumManager} from '../enum.js';

export function namesToLocalizations(names: Name[]): string {
	const namesByLanguage = new Map<string, Set<string>>();
	for (const name of names) {
		const language = enumManager.resourceToEnum(name.language);
		const list = namesByLanguage.get(language);
		if (list) {
			list.add(name.name);
		} else {
			namesByLanguage.set(language, new Set([name.name]));
		}
	}

	return `{${Array.from(namesByLanguage.entries())
		.map(
			([language, names]) => `
  [${language}]: [${Array.from(names).map((name) => safe(name))}],`,
		)
		.join('')}
}`;
}
