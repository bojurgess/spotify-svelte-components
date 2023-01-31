export interface CurrentlyPlaying {
	context: {
		external_urls: { [key: string]: string };
		href: string;
		type: string;
		uri: string;
	};
	timestamp: number;
	progress_ms: number;
	is_playing: boolean;
	item: {
		album: {
			album_type: string;
			external_urls: { [key: string]: string };
			href: string;
			id: string;
			images: {
				height: number;
				url: string;
				width: number;
			}[];
			name: string;
			release_date: string;
			release_date_precision: string;
			total_tracks: number;
			type: string;
			uri: string;
		};
		artists: {
			external_urls: { [key: string]: string };
			href: string;
			id: string;
			name: string;
			type: string;
			uri: string;
		}[];
		disc_number: number;
		duration_ms: number;
		explicit: boolean;
		external_ids: { [key: string]: string };
		external_urls: { [key: string]: string };
		href: string;
		id: string;
		is_local: boolean;
		name: string;
		popularity: number;
		track_number: number;
		type: string;
		uri: string;
		preview_url: string | null;
	};
}
