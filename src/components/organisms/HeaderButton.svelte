<script lang="ts">
	import OnAirButton from '../molecules/OnAirButton.svelte';
	import HamburgerButton from '../molecules/HamburgerButton.svelte';

	export let onAirOnClick = () => {};
	export let hamburgerOnClick = () => {};
</script>

<div class="flex">
	<OnAirButton onClick={onAirOnClick} />
	<HamburgerButton onClick={hamburgerOnClick} />
</div>
