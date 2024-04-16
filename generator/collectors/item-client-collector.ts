import {resourceToId} from '../api-utils.js';
import {client} from '../cache-client.js';
import {collectResources, runInParallel} from '../parallelism.js';

/**
 * Collects ItemClient resources from the API
 */
export async function collectItemResources() {
	const Item = await collectResources((offset, count) =>
		client.fetchItem('listItems', offset, count),
	);

	const items = await runInParallel(
		Item.map(
			(item) => () => client.fetchItem('getItemById', resourceToId(item)),
		),
	);

	const ItemCategory = await collectResources((offset, count) =>
		client.fetchItem('listItemCategories', offset, count),
	);

	const itemCategories = await runInParallel(
		ItemCategory.map(
			(itemCategory) => () =>
				client.fetchItem('getItemCategoryById', resourceToId(itemCategory)),
		),
	);

	const ItemFlingEffect = await collectResources((offset, count) =>
		client.fetchItem('listItemFilingEffects', offset, count),
	);

	const itemFlingEffects = await runInParallel(
		ItemFlingEffect.map(
			(itemFlingEffect) => () =>
				client.fetchItem(
					'getItemFlingEffectById',
					resourceToId(itemFlingEffect),
				),
		),
	);

	const ItemPocket = await collectResources((offset, count) =>
		client.fetchItem('listItemPockets', offset, count),
	);

	const itemPockets = await runInParallel(
		ItemPocket.map(
			(itemPocket) => () =>
				client.fetchItem('getItemPocketById', resourceToId(itemPocket)),
		),
	);

	const ItemAttribute = await collectResources((offset, count) =>
		client.fetchItem('listItemAttributes', offset, count),
	);

	const itemAttributes = await runInParallel(
		ItemAttribute.map(
			(itemAttribute) => () =>
				client.fetchItem('getItemAttributeById', resourceToId(itemAttribute)),
		),
	);

	return {
		items,
		itemCategories,
		itemFlingEffects,
		itemPockets,
		itemAttributes,
		enums: {
			Item,
			ItemCategory,
			ItemFlingEffect,
			ItemPocket,
			ItemAttribute,
		},
	};
}
