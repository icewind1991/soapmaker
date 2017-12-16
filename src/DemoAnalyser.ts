import {Demo, Vector} from '@demostf/demo.js';
import {MessageType} from '@demostf/demo.js/build/Data/Message';
import {Player} from '@demostf/demo.js/build/Data/Player';

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

	const analyser = demo.getAnalyser();
	const header = analyser.getHeader();

	const match = analyser.match;

	const marks: Mark[] = [];

	for (const message of analyser.getMessages()) {
		if (message.type === MessageType.ConsoleCmd) {
			// attack is the mark command
			if (message.command.substr(0, 7) === '+attack') {
				const players: Player[] = Array.from(match.playerEntityMap.values());
				const player = players.find(player => player.user.name === header.nick);
				if (!player) {
					console.log(players, match.playerEntityMap);
					throw new Error('Cant find valid player in demo');
				}
				marks.push({
					tick: match.tick,
					position: new Vector(player.position.x, player.position.y, player.position.z),
					angle: player.viewAngle
				});
			}
		}
	}

	return {
		map: header.map,
		marks
	};
}
