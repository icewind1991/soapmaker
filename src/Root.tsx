import {h, Component} from 'preact';
import {analyseDemo, DemoResult} from './DemoAnalyser';
import {MarkViewer} from './MarkViewer';
import {createSOAPConfig} from './Exporter';
import copy from 'copy-text-to-clipboard';

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
			[
				<MarkViewer map={this.state.result.map} marks={this.state.result.marks}/>
			] : [];

		return <div>
			<h1>
				SOAP-DM config generator:
			</h1>
			<p>
				<ul>
					<li>Start recording a pov demo</li>
					<li>Shoot once for every position and angle where a spawn should be added</li>
					<li>Stop the demo</li>
					<li>Load the recorded demo below</li>
					<li>Verify the spawns and use the copy button to generate the SOAP-DM config</li>
				</ul>
			</p>
			<p>
				<input type="file" onChange={this.handleFile}/>
				<input type="button" value="Copy spawns to clipboard" onClick={() => {
					this.state.result && copy(createSOAPConfig(this.state.result.marks));
				}}/>
			</p>
			{viewer}
		</div>;
	}
}
