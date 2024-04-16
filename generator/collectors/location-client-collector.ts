import {resourceToId} from '../api-utils.js';
import {client} from '../cache-client.js';
import {collectResources} from '../parallelism.js';

/**
 * Collects MoveClient resources from the API
 */
export async function collectLocationResources() {
	const Location = await collectResources((offset, count) =>
		client.fetchLocation('listLocations', offset, count),
	);

	const locations = await Promise.all(
		Location.map((location) =>
			client.fetchLocation('getLocationById', resourceToId(location)),
		),
	);

	const LocationArea = await collectResources((offset, count) =>
		client.fetchLocation('listLocationAreas', offset, count),
	);

	const locationAreas = await Promise.all(
		LocationArea.map((locationArea) =>
			client.fetchLocation('getLocationAreaById', resourceToId(locationArea)),
		),
	);

	const PalParkArea = await collectResources((offset, count) =>
		client.fetchLocation('listPalParkAreas', offset, count),
	);

	const palParkAreas = await Promise.all(
		PalParkArea.map((palParkArea) =>
			client.fetchLocation('getPalParkAreaById', resourceToId(palParkArea)),
		),
	);

	const Region = await collectResources((offset, count) =>
		client.fetchLocation('listRegions', offset, count),
	);

	const regions = await Promise.all(
		Region.map((region) =>
			client.fetchLocation('getRegionById', resourceToId(region)),
		),
	);

	return {
		locations,
		locationAreas,
		palParkAreas,
		regions,
		enums: {
			Location,
			LocationArea,
			PalParkArea,
			Region,
		},
	};
}
