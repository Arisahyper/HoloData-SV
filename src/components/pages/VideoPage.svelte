<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import Video from '../atoms/Video.svelte';
	import { url } from '../../stores/playVideo';

	// let url: string = 'https://www.youtube.com/watch?v=w_DV6f9Qf6Q';
	console.log($url);
</script>

<body>
	<div class="text-center">
		<h1>Video Page</h1>
		<a href={$url}>
			<Button text="Youtubeで視聴" />
		</a>
		<div class="py-20">
			<Video url={$url} styles="mx-auto" />
		</div>
	</div>
</body>
