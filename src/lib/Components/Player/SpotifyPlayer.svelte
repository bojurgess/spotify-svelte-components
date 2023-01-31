<script lang="ts">
	import { data, isLoading, error } from '../../utils/spotifyUtils.js';
	import { currentColor } from '../../utils/colorUtils.js';

	import ArtistList from './ArtistList.svelte';
	import TrackProgress from './TrackProgress.svelte';
</script>

{#if $isLoading}
	<p>Loading Player...</p>
{:else if $error}
	<p>There was an error loading the player.</p>
{:else}
	<div
		class="flex flex-col sm:flex-row max-w-fit items-center p-4 text-black rounded-2xl"
		style="background-color: {$currentColor};"
	>
		<img src={s.album.images[0].url} alt="Album Cover" class="w-72 rounded-2xl" />
		<div class="sm:p-8 py-4 text-center sm:text-start">
			<div class="mb-4">
				<h1 class="font-bold text-xl hover:underline decoration-2">
					<a href={s.track.uri}>{s.track.name}</a>
				</h1>
				<ArtistList />
			</div>
			<TrackProgress />
		</div>
	</div>
{/if}

<style>
	img {
		box-shadow: 0 9px 9px #0000004d, 0 0 29px #0006;
	}
</style>
