import {resourceToId} from '../api-utils.js';
import {client} from '../cache-client.js';
import {collectResources, runInParallel} from '../parallelism.js';

/**
 * Collects MoveClient resources from the API
 */
export async function collectMoveResources() {
	const Move = await collectResources((offset, count) =>
		client.fetchMoves('listMoves', offset, count),
	);
	console.log('moves count:', Move.length);

	const moves = await runInParallel(
		Move.map(
			(move) => () => client.fetchMoves('getMoveById', resourceToId(move)),
		),
	);

	const MoveCategory = await collectResources((offset, count) =>
		client.fetchMoves('listMoveCategories', offset, count),
	);

	const moveCategories = await runInParallel(
		MoveCategory.map(
			(moveCategory) => () =>
				client.fetchMoves('getMoveCategoryById', resourceToId(moveCategory)),
		),
	);

	const MoveDamageClass = await collectResources((offset, count) =>
		client.fetchMoves('listMoveDamageClasses', offset, count),
	);

	const moveDamageClasses = await runInParallel(
		MoveDamageClass.map(
			(moveDamageClass) => () =>
				client.fetchMoves(
					'getMoveDamageClassById',
					resourceToId(moveDamageClass),
				),
		),
	);

	const MoveLearnMethod = await collectResources((offset, count) =>
		client.fetchMoves('listMoveLearnMethods', offset, count),
	);

	const moveLearnMethods = await runInParallel(
		MoveLearnMethod.map(
			(moveLearnMethod) => () =>
				client.fetchMoves(
					'getMoveLearnMethodById',
					resourceToId(moveLearnMethod),
				),
		),
	);

	const MoveTarget = await collectResources((offset, count) =>
		client.fetchMoves('listMoveTargets', offset, count),
	);

	const moveTargets = await runInParallel(
		MoveTarget.map(
			(moveTarget) => () =>
				client.fetchMoves('getMoveTargetById', resourceToId(moveTarget)),
		),
	);

	const MoveAilment = await collectResources((offset, count) =>
		client.fetchMoves('listMoveAilments', offset, count),
	);

	const moveAilments = await runInParallel(
		MoveAilment.map(
			(moveAilment) => () =>
				client.fetchMoves('getMoveAilmentById', resourceToId(moveAilment)),
		),
	);

	const MoveBattleStyle = await collectResources((offset, count) =>
		client.fetchMoves('listMoveBattleStyles', offset, count),
	);

	const moveBattleStyles = await runInParallel(
		MoveBattleStyle.map(
			(moveBattleStyle) => () =>
				client.fetchMoves(
					'getMoveBattleStyleById',
					resourceToId(moveBattleStyle),
				),
		),
	);

	return {
		moves,
		moveCategories,
		moveDamageClasses,
		moveLearnMethods,
		moveTargets,
		moveAilments,
		moveBattleStyles,
		enums: {
			Move,
			MoveCategory,
			MoveDamageClass,
			MoveLearnMethod,
			MoveTarget,
			MoveAilment,
			MoveBattleStyle,
		},
	};
}
