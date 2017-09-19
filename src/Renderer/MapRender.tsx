import {h} from 'preact';

import {MarkDot} from './MarkDot';
import {findMapAlias, MapBoundries} from './MapBoundries';
import {Mark} from '../DemoAnalyser';

export interface MapRenderProps {
	map: string;
	marks: Mark[];
	size: {
		width: number;
		height: number;
	},
	world: MapBoundries;
	scale: number;
}

import './MapRender.css';

export function MapRender({map, marks, size, world, scale}: MapRenderProps) {
	const mapAlias = findMapAlias(map);
	const image = require(`../images/leveloverview/dist/${mapAlias}.jpg`) as string;
	const background = `url(${image})`;

	if (world.boundaryMax.x === 0) {
		return <div/>;
	}

	const playerDots = marks
		.map((mark: Mark, key) => {
			return <MarkDot key={key} mark={mark} mapBoundary={world}
							targetSize={size} scale={scale}/>;
		});


	return (
		<svg className="map-background" width={size.width} height={size.height}
			 style={{backgroundImage: background}}>
			{playerDots}
		</svg>
	);
}
