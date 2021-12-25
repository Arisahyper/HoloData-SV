<script>
	import Icon from '@iconify/svelte';

	export let icon = 'heroicons-outline:play';
	export let color = 'red';
	export let width = '32';
</script>

<Icon {icon} {color} {width} />
