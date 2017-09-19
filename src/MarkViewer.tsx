import {h, Component} from 'preact';
import {MapRender} from './Renderer/MapRender';
import {MapContainer} from './Renderer/MapContainer';
import {Mark} from './DemoAnalyser';
import {getMapBoundaries, MapBoundries} from './Renderer/MapBoundries';

import './MarkViewer.css';

export interface AnalyseProps {
	map: string;
	marks: Mark[];
}

export interface AnalyseState {
	worldSize: {
		width: number;
		height: number;
	}
	scale: number;
	mapBoundary: MapBoundries
}


export class MarkViewer extends Component<AnalyseProps, AnalyseState> {

	state: AnalyseState = {
		worldSize: {
			width: 0,
			height: 0
		},
		scale: 1,
		mapBoundary: {
			boundaryMax: {
				x: 0, y: 0,
			},
			boundaryMin: {
				x: 0, y: 0,
			}
		}
	};

	componentDidMount() {
		const mapBoundary = getMapBoundaries(this.props.map);
		if (!mapBoundary) {
			throw new Error('Unsupported map');
		}
		const worldSize = {
			width: mapBoundary.boundaryMax.x - mapBoundary.boundaryMin.x,
			height: mapBoundary.boundaryMax.y - mapBoundary.boundaryMin.y,
		};
		this.setState({worldSize, mapBoundary});
	}

	render() {
		return (
			<div>
				<div className="map-holder">
					<MapContainer contentSize={this.state.worldSize}
								  onScale={scale => this.setState({scale})}>
						<MapRender size={this.state.worldSize}
								   marks={this.props.marks}
								   map={this.props.map}
								   world={this.state.mapBoundary}
								   scale={this.state.scale}/>
					</MapContainer>
				</div>
			</div>
		);
	}
}
