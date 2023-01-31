<script lang="ts">
	import { currentColor, colorPalette } from '../../../utils/colorUtils';

	if ($colorPalette) {
		console.log($colorPalette);
	}

	function handleClick(id) {
		currentColor.set($colorPalette[id].hex);
	}

	function handleHover(id, state) {
		const button = document.getElementById(id);

		if (state === 'enter') {
			button.style.color = $colorPalette[id].hex;
		} else {
			button.style.color = 'white';
		}
	}

	export let text: string[];
</script>

{#if $colorPalette}
	<span class="flex flex-row">
		{#each text as letter}
			<button
				id={text.indexOf(letter)}
				on:focus={() => ''}
				on:mouseover={() => {
					handleHover(text.indexOf(letter), 'enter');
				}}
				on:mouseleave={() => {
					handleHover(text.indexOf(letter), 'leave');
				}}
				on:click={() => {
					handleClick(text.indexOf(letter));
				}}
				class="text-2xl text-white font-black text-8xl">{letter}</button
			>
		{/each}
	</span>
{:else}
	<span class="flex flex-row">
		<h1 class="text-white font-black text-8xl">beno.</h1>
	</span>
{/if}
