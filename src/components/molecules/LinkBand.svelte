<script lang="ts">
	export let title = 'Hello World';
	export let src = '';
	export let alt = '';
	export let width = '48';
	export let href = '';
</script>

<body>
	<a {href}>
		<div class="flex items-center bg-gray-200">
			<img {src} {width} {alt} class="rounded-full my-1.5 ml-3" />
			<div>
				<h1 class="text-lg pl-3 text-blue-500">{title}</h1>
			</div>
		</div>
	</a>
</body>
