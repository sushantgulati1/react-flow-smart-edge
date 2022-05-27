import { StraightEdge } from 'react-flow-renderer'
import {
	smartEdgeFactory,
	svgDrawStraightLinePath,
	pathfindingAStarNoDiagonal
} from '../SmartEdge'
import type { FactoryOptions } from '../SmartEdge'

const StraightConfiguration = {
	drawEdge: svgDrawStraightLinePath,
	fallback: StraightEdge,
	generatePath: pathfindingAStarNoDiagonal
}

export const SmartStraightEdge = smartEdgeFactory(StraightConfiguration)
SmartStraightEdge.displayName = 'SmartStraightEdge'

export const straightEdgeFactory = ({
	debounceTime,
	gridRatio,
	nodePadding,
	filterNodesFn
}: FactoryOptions) => {
	const SmartStraightEdge = smartEdgeFactory({
		...StraightConfiguration,
		debounceTime,
		gridRatio,
		nodePadding,
		filterNodesFn
	})
	SmartStraightEdge.displayName = 'SmartStraightEdge'
	return SmartStraightEdge
}
