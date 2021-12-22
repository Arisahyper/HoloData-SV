<script lang="ts">
	import Header from '../organisms/Header.svelte';
	import Footer from '../organisms/Footer.svelte';
	import CardList from '../templates/CardList.svelte';
	import HamburgerMenu from '../organisms/HamburgerMenu.svelte';
	import { menuList } from '../../../static/data';

	let isOpen: boolean = false;

	const clickHandler = () => {
		isOpen = !isOpen;
		// console.log(isOpen);
	};
</script>

<body class="flex flex-col min-h-screen m-0">
	<div class="flex-grow">
		<Header
			onClick={() => {
				clickHandler();
			}}
		/>
		{#if isOpen}
			<HamburgerMenu
				{menuList}
				onClick={() => {
					clickHandler();
				}}
			/>
		{/if}
		<CardList />
	</div>
	<Footer />
</body>
