import {Mark} from './DemoAnalyser';

export function createSOAPConfig(marks: Mark[]) {
	const spawns = marks.map((mark, i) => `		"spawn ${i}"
		{
			"origin"	"${mark.position.x.toFixed(2)} ${mark.position.y.toFixed(2)} ${mark.position.z.toFixed(2) + 5}"
			"angles"	"0 ${mark.angle.toFixed(2)} 0"
		}`);
	return `"Spawns"
{
	"red"
	{
${spawns.join('\n')}
	}
	"blue"
	{
${spawns.join('\n')}
	}
}
`;
}
