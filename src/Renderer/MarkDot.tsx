import {h} from 'preact';
import './MarkDot.css';
import {MapBoundries} from './MapBoundries';
import {Mark} from '../DemoAnalyser';

export interface PlayerProp {
	mark: Mark;
	mapBoundary: MapBoundries;
	targetSize: {
		width: number;
		height: number;
	};
	scale: number;
	key?: number;
}

export function MarkDot({mark, mapBoundary, targetSize, scale}: PlayerProp) {
	const worldWidth = mapBoundary.boundaryMax.x - mapBoundary.boundaryMin.x;
	const worldHeight = mapBoundary.boundaryMax.y - mapBoundary.boundaryMin.y;
	const {x, y} = mark.position;
	const scaledX = (x - mapBoundary.boundaryMin.x) / worldWidth * targetSize.width;
	const scaledY = (worldHeight - (y - mapBoundary.boundaryMin.y)) / worldHeight * targetSize.height;
	const teamColor = '#a75d50';

	return <g
		transform={`translate(${scaledX} ${scaledY}) scale(${1 / scale})`}>
		<polygon points="-6,14 0, 16 6,14 0,24" fill="white"
				 transform={`rotate(${270 - mark.angle})`}/>
		<circle r={16} strokeWidth={1} stroke="white" fill={teamColor}/>
	</g>;
}
