<script lang="ts">
	import HamburgerButton from '../molecules/HamburgerButton.svelte';
	import Title from '../molecules/Title.svelte';
	import HeaderButton from './HeaderButton.svelte';

	export let onAirOnClick = () => {};
	export let hamburgerOnClick = () => {};
</script>

<body>
	<div class=" h-16 shadow border-solid border-b border-gray-300 flex justify-between items-center">
		<div class="pl-5">
			<Title />
		</div>
		<div class="justify-end pr-5">
			<HeaderButton {onAirOnClick} {hamburgerOnClick} />
		</div>
	</div>
</body>
