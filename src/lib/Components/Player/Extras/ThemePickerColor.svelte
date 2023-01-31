<script lang="ts">
	import { currentColor, colorPalette } from '../../../utils/colorUtils';

	function handleClick(id) {
		currentColor.set($colorPalette[id].hex);
	}
</script>

{#if $colorPalette}
	<span class="flex">
		{#each $colorPalette as color}
			<button
				on:click={() => {
					handleClick($colorPalette.indexOf(color));
				}}
				style="background-color: {color.hex}"
				class="w-24 h-24 rounded-full">
			</button>
		{/each}
	</span>
{/if}
