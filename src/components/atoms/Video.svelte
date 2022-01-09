<script lang="ts">
	export let videoUrl: string = '';
	export let styles: string = '';
</script>

<div class="relative pt-[56.25%]">
	<iframe
		class="absolute w-full h-full inset-0"
		width="560"
		height="315"
		src={'https://www.youtube.com/embed/' + videoUrl.split('=')[1]}
		title="YouTube video player"
		frameBorder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
	/>
</div>
