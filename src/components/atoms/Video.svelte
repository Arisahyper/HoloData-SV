<script lang="ts">
	export let url: string = 'https://www.youtube.com/watch=w_DV6f9Qf6Q';
	export let styles: string = '';
</script>

<iframe
	class={styles}
	width="480"
	height="270"
	src={'https://www.youtube.com/embed/' + url.split('=')[1]}
	title="YouTube video player"
	frameBorder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowFullScreen
/>
