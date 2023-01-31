<script lang="ts">
	import { data } from '../../utils/spotifyUtils.js';
</script>

<span class="flex text-center sm:text-start justify-center sm:justify-start">
	{#each $data.artists as artist}
		{#if $data.artists.indexOf(artist) === $data.artists.length - 1}
			<a class="hover:underline decoration-2" href={artist.uri}>{artist.name}</a>
		{:else}
			<a class="hover:underline decoration-2" href={artist.uri}>{artist.name}, </a>
		{/if}
	{/each}
</span>
