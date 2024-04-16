type EnumDataKeys<
	Data extends object,
	Keys extends keyof Data & string = keyof Data extends string
		? keyof Data
		: never,
> = Keys;

type EnumMapper<
	Data extends object,
	Keys extends EnumDataKeys<Data> = EnumDataKeys<Data>,
> = {
	[key in Keys]?: string;
};

export interface EnumData<Data extends object> {
	enumName: string;
	map: EnumMapper<Data>;
}

export function createEnum<Data extends object>({
	enumName,
	map,
}: EnumData<Data>) {
	return `export enum ${enumName} {
  None = 0,
  ${Object.entries(map)
		.map(([, toEnumKey], index) => `${toEnumKey} = ${1 << index},`)
		.join('\n')}
}`;
}

export function createBitsForObject<Data extends object>(
	data: Data,
	{enumName, map}: EnumData<Data>,
) {
	const values = Object.keys(data)
		.filter(
			(key): key is EnumDataKeys<Data> => !!map[key as EnumDataKeys<Data>],
		)
		.filter((key) => data[key])
		.map((key) => `${enumName}.${map[key]}`);

	if (values.length === 0) {
		values.push(`${enumName}.None`);
	}

	return values.join(' | ');
}
