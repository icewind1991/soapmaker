import {Demo, Packet, Vector} from 'tf2-demo/build/es6';

export interface Mark {
	tick: number;
	position: Vector;
	angle: number;
}

export interface DemoResult {
	map: string;
	marks: Mark[];
}

export function analyseDemo(buffer: ArrayBuffer): DemoResult {
	const demo = new Demo(buffer);

	const parser = demo.getParser();
	const header = parser.readHeader();

	const match = parser.match;

	const marks: Mark[] = [];

	parser.on('packet', (packet: Packet) => {
		if (packet.packetType === 'consoleCmd') {
			// attack is the mark command
			if (packet.command.substr(0, 7) === '+attack') {
				const player = match.players.find(player => player.user.name === header.nick);
				if (!player) {
					console.log(match.players);
					throw new Error('Cant find valid player in demo');
				}
				marks.push({
					tick: match.tick,
					position: new Vector(player.position.x, player.position.y, player.position.z),
					angle: parser['viewAngles'][0][1]
				});
			}
		}
	});

	parser.parseBody();

	return {
		map: header.map,
		marks
	};
}
