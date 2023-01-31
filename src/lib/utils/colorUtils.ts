import Vibrant from 'node-vibrant';
import { writable } from 'svelte/store';
import type { ColorPalette } from '../../interfaces/ColorPalette';

export function getBrightness(hex: string) {
	hex = hex.replace('#', '');

	const r = parseInt(hex.substr(0, 2), 16);
	const g = parseInt(hex.substr(2, 2), 16);
	const b = parseInt(hex.substr(4, 2), 16);

	return (r * 299 + g * 587 + b * 114) / 1000;
}

export async function getColorPalette(imageUrl: string) {
	const palette = await Vibrant.from(imageUrl).getPalette();
	const processedPalette = Object.entries(palette).map(([name, swatch]) => {
		return {
			hex: swatch.hex,
			lightness: getBrightness(swatch.hex)
		};
	});
	colorPalette.set(processedPalette);
	currentColor.set(processedPalette[0].hex);
	return processedPalette;
}

export function sortPalette(palette: any[]) {
	return palette.sort((a, b) => b.lightness - a.lightness);
}

export let colorPalette = writable();
export let currentColor = writable();
