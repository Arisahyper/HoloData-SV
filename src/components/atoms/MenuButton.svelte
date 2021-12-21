<script lang="ts">
	import Icon from '@iconify/svelte';
	import Logo from './Logo.svelte';
	export let width: string = '24';
	let color = '#000';

	function overHandler(event: MouseEvent) {
		color = '#0169ff';
	}
	function outHandler(event: MouseEvent) {
		color = '#000';
	}
	export let onClick: () => void = () => {};
</script>

<div on:mouseover={overHandler} on:mouseout={outHandler} on:focus on:blur>
	<button class="flex" on:click={onClick}>
		<Icon icon="heroicons-outline:menu" {width} {color} />
	</button>
</div>
