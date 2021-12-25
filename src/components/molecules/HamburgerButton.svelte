<script lang="ts">
	import HeroIcon from '../atoms/HeroIcon.svelte';

	let color: string = '#000';
	function overMenuHandler() {
		color = '#0169ff';
	}
	function outMenuHandler() {
		color = '#000';
	}
	export let onClick = () => {};
</script>

<button class="" on:click={onClick}>
	<div on:mouseover={overMenuHandler} on:mouseout={outMenuHandler} on:focus on:blur>
		<HeroIcon icon="heroicons-outline:menu" width="32" {color} />
	</div>
</button>
