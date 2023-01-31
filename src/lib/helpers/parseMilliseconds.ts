export default function parseMilliseconds(ms: number) {
	let minutes = Math.floor(ms / 60000);
	let seconds = Math.floor((ms % 60000) / 1000)
		.toString()
		.padStart(2, '0');

	return `${minutes}:${seconds}`;
}
