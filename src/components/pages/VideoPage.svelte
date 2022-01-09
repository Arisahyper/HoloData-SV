<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import Video from '../atoms/Video.svelte';

	// let url: string = 'https://www.youtube.com/watch?v=w_DV6f9Qf6Q';
	let url: string = 'https://www.youtube.com/watch?v=YuuZBEQ4zh0';
</script>

<body>
	<div class="text-center">
		<h1>Video Page</h1>
		<a href="https://www.youtube.com/watch?v=w_DV6f9Qf6Q">
			<Button text="Youtube" />
		</a>

		<Video {url} />
	</div>
</body>
