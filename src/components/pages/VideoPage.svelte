<script lang="ts">
	import Button from '../atoms/Button.svelte';
</script>

<body>
	<div class="text-center">
		<h1>Video Page</h1>
		<a href="https://www.youtube.com/watch?v=w_DV6f9Qf6Q">
			<Button text="Youtube" />
		</a>

		<iframe
			class="mx-auto"
			width="480"
			height="270"
			src={'https://www.youtube.com/embed/' + 'w_DV6f9Qf6Q'}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	</div>
</body>
