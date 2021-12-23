<script lang="ts">
	import Header from '../organisms/Header.svelte';
	import Footer from '../organisms/Footer.svelte';
	import CardList from '../templates/CardList.svelte';
	import HamburgerMenu from '../organisms/HamburgerMenu.svelte';
	import { menuList } from '../../../static/data';

	let isOpen: boolean = false;
	let isSimple: boolean = false;

	const clickOpenHandler = () => {
		isOpen = !isOpen;
		// console.log(isOpen);
	};

	const clickSimpleHandler = () => {
		isSimple = !isSimple;
		// console.log(isOpen);
	};
</script>

<body class="flex flex-col min-h-screen m-0">
	<div class="flex-grow">
		<Header
			onClick={() => {
				clickOpenHandler();
			}}
		/>
		{#if isOpen}
			<HamburgerMenu
				{menuList}
				onClick={() => {
					clickOpenHandler();
				}}
			/>
		{/if}
		<CardList />

		<!-- {#if !isOpen}
			<CardList />
		{:else if isOpen}
			<div />
		{/if} -->
	</div>
	<Footer />
</body>
