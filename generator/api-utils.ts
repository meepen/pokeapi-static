import type {NamedAPIResource} from 'pokenode-ts';

export function apiNameToClassName(apiName: string) {
	const className = apiName
		.split(/[-_ ]/g)
		.map((part) =>
			part.length === 0 ? '_' : part[0].toUpperCase() + part.slice(1),
		)
		.join('')
		.replace(/[^a-zA-Z0-9]/g, '_')
		.replace(/^[^a-zA-Z]/, '_$&');

	return className.startsWith('Generation')
		? `Generation${className.slice('Generation'.length).toUpperCase()}`
		: className;
}

export function classNameToFileName(className: string) {
	return className
		.split(/(?=[A-Z])/g)
		.map((part) => part.toLowerCase())
		.join('-');
}

export function resourceToId(resource: NamedAPIResource) {
	const res = Number.parseInt(resource.url.match(/\/(-?\d+)\/$/)?.[1] ?? '');
	if (Number.isNaN(res)) {
		throw new Error(`Invalid resource URL: ${resource.url}`);
	}

	return res;
}
