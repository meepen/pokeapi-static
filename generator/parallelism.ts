import type {NamedAPIResourceList} from 'pokenode-ts';

export async function runInParallel<T>(
	jobs: (() => Promise<T>)[],
	maxParallelism = 10,
) {
	let index = 0;

	const results = new Array<T>(jobs.length);

	async function runSingleJob() {
		while (index < jobs.length) {
			const currentIndex = index;
			index += 1;

			results[currentIndex] = await jobs[currentIndex]();
		}
	}

	await Promise.all(
		new Array(maxParallelism).fill(null).map(() => runSingleJob()),
	);

	return results;
}

export async function collectResources(
	fetch: (offset: number, count: number) => Promise<NamedAPIResourceList>,
) {
	console.log('collecting resources');
	const fetchPer = 100;

	const firstResources = await fetch(0, fetchPer);
	console.log('resource count: ', firstResources.count);

	const results = await runInParallel(
		new Array(Math.ceil(firstResources.count / fetchPer))
			.fill(null)
			.map((_, i) => () => fetch((i + 1) * fetchPer, fetchPer)),
	);

	return [...firstResources.results, ...results.flatMap((r) => r.results)];
}
