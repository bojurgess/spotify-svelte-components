<script lang="ts">
	import parseMilliseconds from '../../helpers/parseMilliseconds.js';
	import { data, fetchSpotifyData } from '../../utils/spotifyUtils.js';

	let interval: any;
	let progressPercent: number = 0;
	let progress: number = 0;
	let duration: number = 10000;

	$: if ($data) {
		duration = $data.track.duration;
		progress = $data.track.progress;
	}

	function resetProgressBar() {
		clearInterval(interval);
		progress = 0;
		updateProgressBar();
	}

	function trackProgress() {
		interval = setInterval(() => {
			progress += 1000;
			if (progress + 1000 >= duration) {
				resetProgressBar();
				fetchSpotifyData();
			} else {
				updateProgressBar();
			}
		}, 1000);
	}

	function updateProgressBar() {
		progressPercent = (progress / duration) * 100;
	}

	trackProgress();
</script>

<span class="flex items-center">
	<h3 class="mr-2">{parseMilliseconds(progress)}</h3>
	<progress class="progress w-32 sm:w-52" value={progressPercent} max="100" />
	<h3 class="ml-2">{parseMilliseconds(duration)}</h3>
</span>
