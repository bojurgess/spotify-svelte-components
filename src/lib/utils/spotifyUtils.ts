import { writable } from 'svelte/store';
import { getColorPalette } from './colorUtils';
import type { CurrentlyPlaying } from '../../interfaces/CurrentlyPlaying';

interface spotifyResponse {
	status: number;
	statusText: string;
	data: CurrentlyPlaying;
}

export async function fetchData(user: string, market: string) {
	const query = new URLSearchParams({
		market: market,
		user: user
	});
	const host = 'https://getnowplaying.penguinoo.workers.dev';

	return await fetch(`${host}?${query.toString()}`).then((data) => {
		return data.json().then((json: CurrentlyPlaying) => {
			return {
				status: data.status,
				statusText: data.statusText,
				data: json
			};
		});
	});
}

export function processData(data: spotifyResponse) {
	const { status, statusText, data: response } = data;

	if (status !== 200) {
		throw new Error([status, statusText].join(' - '));
	} else {
		return {
			artists: response.item.artists,
			album: {
				uri: response.item.album.uri,
				name: response.item.album.name,
				images: response.item.album.images
			},
			track: {
				uri: response.item.uri,
				name: response.item.name,
				duration: response.item.duration_ms,
				progress: response.progress_ms,
				isPlaying: response.is_playing,
				preview_url: response.item.preview_url
			}
		};
	}
}

export async function fetchSpotifyData() {
	isLoading.set(true);
	try {
		const response = await fetchData(user, market);
		const processed = processData(response);
		data.set(processed);
		error.set(null);
		await getColorPalette(processed.album.images[0].url);
	} catch (err) {
		console.log(err);
		data.set(null);
		error.set(err);
	}
	isLoading.set(false);
}

export const data = writable();
export const error = writable();
export const isLoading = writable(false);
