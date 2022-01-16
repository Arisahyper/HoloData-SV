<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import Video from '../atoms/Video.svelte';
	import Header from '../organisms/Header.svelte';
	import CardList from '../templates/CardList.svelte';
	import HamburgerMenu from '../organisms/HamburgerMenu.svelte';
	import { menuList } from '../../../static/data';
	import { url, liverName, liverIconUrl, startedAt, description } from '../../stores/playVideo';

	import { isOnAir } from '../../stores/isLive';
	let isOpen: boolean = false;

	const clickOpenHandler = () => {
		isOpen = !isOpen;
	};
	const onAirOnClick = () => {
		$isOnAir = !$isOnAir;
	};
</script>

<body>
	<div class="min-h-screen">
		<Header hamburgerOnClick={clickOpenHandler} {onAirOnClick} />
		{#if isOpen}
			<HamburgerMenu
				{menuList}
				onClick={() => {
					clickOpenHandler();
				}}
			/>
		{/if}

		<div class="sticky top-0">
			<Video videoUrl={$url} />
		</div>

		<div class="px-3 py-4 text-xl tracking-wide font-semibold text-gray-900">
			<p>{$description}</p>
		</div>

		<div class=" border-b-2 border-gray-700 mx-3" />

		<div class="flex py-4">
			<div class="px-3">
				<img src={$liverIconUrl} class="rounded-full" alt="" width="48" />
			</div>

			<div class="text-left">
				<h2>{$liverName}</h2>
				<p class="text-gray-600">{$startedAt}</p>
			</div>
		</div>

		<div class="px-3">
			<a href={$url} target="_blank">
				<Button text="Youtubeで視聴" />
			</a>
		</div>

		<div class="py-4 px-3">
			<a href="/" class="text-blue-600">← ホームに戻る </a>
		</div>

		<CardList />
	</div>
</body>

<div class="flex items-start" />
