import {writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {
	apiNameToClassName,
	classNameToFileName,
	resourceToId,
} from './api-utils.js';
import {generatedDir} from './file-structure.js';
import {tabs} from './const.js';
import type {NamedAPIResource} from 'pokenode-ts';

export class EnumManager {
	readonly urlPathToEnumName = new Map<
		string,
		{enumName: string; idLookup: Map<number, string>}
	>();

	getUrlPrefix(url: string) {
		return new URL(url).pathname.split('/').slice(0, -2).join('/');
	}

	getResourcePrefix(resource: NamedAPIResource) {
		return this.getUrlPrefix(resource.url);
	}

	createEnumData<T extends {id: number; name: string}[]>(
		data: T,
		idLookup: Map<number, string>,
	): string[] {
		const nameCountLookup = new Map<string, number>();
		return data
			.sort((a, b) => a.id - b.id)
			.map((item, i) => {
				const last = data[i - 1];
				let apiName = apiNameToClassName(item.name);
				if (nameCountLookup.has(apiName)) {
					let count = nameCountLookup.get(apiName);
					if (count === undefined) {
						throw new Error('count is undefined');
					}

					count++;
					nameCountLookup.set(apiName, count);
					apiName += count;

					console.warn(
						`Duplicate enum name found: ${item.name}. Renaming to ${apiName}`,
					);
				} else {
					nameCountLookup.set(apiName, 1);
				}

				idLookup.set(item.id, apiName);

				if (!last || last.id + 1 !== item.id) {
					return `${apiName} = ${item.id}`;
				}

				return apiName;
			});
	}

	/**
	 * Write an enum file to the generated directory
	 * @param enumName The enum name, without the `.enum.ts` extension or the `Pokemon` prefix
	 * @param data The data to write to the file
	 */
	async writeEnumFile<T extends {id: number; name: string}[]>(
		enumName: string,
		data: T,
		idLookup: Map<number, string>,
	) {
		await writeFile(
			join(generatedDir, `${classNameToFileName(enumName)}.enum.ts`),
			`// AUTO GENERATED FILE
export enum ${enumName} {${this.createEnumData(data, idLookup)
				.map(
					(line) => `
	${tabs(1)}${line},`,
				)
				.join('')}}
`,
		);
	}

	async writeEnums<T extends {enums: {[key in string]: NamedAPIResource[]}}>({
		enums,
	}: T) {
		for (const [name, data] of Object.entries(enums)) {
			if (data.find((data) => !data.name)) {
				console.warn('Skipping writing enums with missing names', name);
				continue;
			}

			const first = data[0];
			const idLookup = new Map<number, string>();
			if (first) {
				const prefix = this.getResourcePrefix(first);

				if (this.urlPathToEnumName.has(prefix)) {
					throw new Error(
						`Duplicate enum name for ${prefix}: ${name} and ${
							this.urlPathToEnumName.get(prefix)?.enumName
						}`,
					);
				}

				this.urlPathToEnumName.set(prefix, {
					enumName: name,
					idLookup,
				});
			}

			console.log('writing enum:', name);
			await this.writeEnumFile(
				name,
				data.map((resource) => ({
					id: resourceToId(resource),
					name: resource.name,
				})),
				idLookup,
			);
		}
	}

	async writeEnumExportFile() {
		await writeFile(
			join(generatedDir, 'all-enum.ts'),
			`// AUTO GENERATED FILE
${Array.from(this.urlPathToEnumName.values())
	.map(
		({enumName}) =>
			`export * from './${classNameToFileName(enumName)}.enum.js';`,
	)
	.join('\n')}
`,
		);
	}

	resourceToEnum(resource: NamedAPIResource) {
		const prefix = this.getResourcePrefix(resource);

		const enumData = this.urlPathToEnumName.get(prefix);
		if (!enumData) {
			throw new Error(`No enum found for ${prefix}`);
		}

		return `${enumData.enumName}.${apiNameToClassName(resource.name)}`;
	}

	private enumNameToEnumData(enumName: string) {
		return Array.from(this.urlPathToEnumName.entries()).find(
			([, data]) => data.enumName === enumName,
		)?.[1];
	}

	resourceIdToEnum(enumName: string, id: number) {
		const enumData = this.enumNameToEnumData(enumName);
		if (!enumData) {
			throw new Error(`No enum found for ${enumName}`);
		}

		const name = enumData.idLookup.get(id);

		if (!name) {
			throw new Error(`No enum found for ${enumName}: ${id}`);
		}

		return `${enumData.enumName}.${name}`;
	}

	collapseEnumData(enumName: string) {
		const enumData = this.enumNameToEnumData(enumName);
		if (!enumData) {
			throw new Error(`No enum found for ${enumName}`);
		}

		return Array.from(enumData.idLookup.values())
			.map(
				(name) =>
					`const ${this.getCollapsedEnumName(
						enumName,
						name,
					)} = ${enumName}.${name};`,
			)
			.join('\n');
	}

	getCollapsedEnumName(
		...args:
			| [resource: NamedAPIResource]
			| [enumName: string, name: string]
			| [enumName: string, id: number]
	) {
		const enumData =
			args.length === 1
				? this.urlPathToEnumName.get(this.getResourcePrefix(args[0]))
				: this.enumNameToEnumData(args[0]);

		if (!enumData) {
			throw new Error(`No enum found for ${args[0]}`);
		}

		const name =
			args.length === 1
				? args[0].name
				: typeof args[1] === 'number'
					? enumData.idLookup.get(args[1])
					: args[1];

		if (!name) {
			throw new Error(`No enum found for ${args[0]}: ${args[1]}`);
		}

		return `${enumData.enumName}_${apiNameToClassName(
			typeof args[1] === 'string' ? args[1] : name,
		)}`;
	}
}

export const enumManager = new EnumManager();
