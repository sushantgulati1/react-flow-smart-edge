import { BezierEdge } from 'react-flow-renderer'
import {
	smartEdgeFactory,
	svgDrawSmoothLinePath,
	pathfindingAStarDiagonal
} from '../SmartEdge'
import type { FactoryOptions } from '../SmartEdge'

const BezierConfiguration = {
	drawEdge: svgDrawSmoothLinePath,
	fallback: BezierEdge,
	generatePath: pathfindingAStarDiagonal
}

export const SmartBezierEdge = smartEdgeFactory(BezierConfiguration)
SmartBezierEdge.displayName = 'SmartBezierEdge'

export const bezierEdgeFactory = ({
	debounceTime,
	gridRatio,
	nodePadding,
	filterNodesFn
}: FactoryOptions) => {
	const SmartBezierEdge = smartEdgeFactory({
		...BezierConfiguration,
		debounceTime,
		gridRatio,
		nodePadding,
		filterNodesFn
	})
	SmartBezierEdge.displayName = 'SmartBezierEdge'
	return SmartBezierEdge
}
