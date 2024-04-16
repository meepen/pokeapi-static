import type {Language} from './generated/language.enum.js';

export type Localization = {
	[key in Language]?: string[];
};
