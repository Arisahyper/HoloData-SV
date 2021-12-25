<script lang="ts">
	import HeroIcon from '../atoms/HeroIcon.svelte';

	let isOnAir = false;
	let color = '#666';

	export let onClick = () => {};
	let changeColorHandler = () => {
		isOnAir = !isOnAir;
		isOnAir ? (color = 'red') : (color = '#666');
	};
</script>

<button class="" on:click={onClick} on:click={changeColorHandler}>
	<div class="pr-3">
		<HeroIcon icon="heroicons-outline:play" width="32" {color} />
	</div>
</button>
