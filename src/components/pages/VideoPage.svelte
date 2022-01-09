<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import Video from '../atoms/Video.svelte';
	import Header from '../organisms/Header.svelte';
	import { url, liverName, liverIconUrl, startedAt, description } from '../../stores/playVideo';
</script>

<body>
	<div class="">
		<Header />

		<div class="py-4">
			<Video videoUrl={$url} styles="mx-auto" />
		</div>

		<div class="bg-sky-400">
			<p>{$description}</p>
		</div>

		<img src={$liverIconUrl} class="rounded-full" alt="" width="48" />

		<div class="text-left">
			<h2>{$liverName}</h2>
			<p>{$startedAt}</p>
		</div>

		<a href={$url} target="_blank">
			<Button text="Youtubeで視聴" />
		</a>
	</div>
</body>

<div class="flex items-start" />
