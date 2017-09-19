import {h, Component} from 'preact';
import {analyseDemo, DemoResult} from './DemoAnalyser';
import {MarkViewer} from './MarkViewer';

export interface AppState {
	result: DemoResult | null;
}

export class Root extends Component<{}, AppState> {
	handleFile = event => {
		const files = (event.target as HTMLInputElement).files;
		if (!files) {
			return;
		}
		const file = files[0];
		const reader = new FileReader();
		reader.onload = () => {
			const buffer = reader.result as ArrayBuffer;
			const result = analyseDemo(buffer);
			this.setState({result});
		};
		reader.readAsArrayBuffer(file);
	};

	render() {
		const viewer = this.state.result ?
			<MarkViewer map={this.state.result.map} marks={this.state.result.marks}/> : [];

		return <div>
			<input type="file" onChange={this.handleFile}/>
			{viewer}
		</div>;
	}
}
