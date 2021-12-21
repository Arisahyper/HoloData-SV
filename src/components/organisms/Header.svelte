<script>
	import Title from '../molecules/Title.svelte';
	import Icon from '@iconify/svelte';
</script>

<body>
	<div class=" h-16 shadow border-solid border-b border-gray-300 flex justify-between items-center">
		<Title />
		<div class="justify-end pr-3">
			<Icon icon="heroicons-outline:menu" width="32" />
		</div>
	</div>
</body>
