<script lang="ts">
	import Icon from '@iconify/svelte';
	export let icon: string = 'heroicons-outline:menu';
	export let width: string = '32';
	let color: string = '#000';

	function overHandler() {
		color = '#0169ff';
	}
	function outHandler() {
		color = '#000';
	}
	export let onClick = () => {};
</script>

<div on:mouseover={overHandler} on:mouseout={outHandler} on:focus on:blur>
	<button class="flex" on:click={onClick}>
		<Icon {icon} {width} {color} />
	</button>
</div>
