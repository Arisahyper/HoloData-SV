<script lang="ts">
	import Title from '../molecules/Title.svelte';
	import MenuButton from '../atoms/MenuButton.svelte';

	export let onClick = () => {};
</script>

<body>
	<div class=" h-16 shadow border-solid border-b border-gray-300 flex justify-between items-center">
		<div class="pl-5">
			<Title />
		</div>
		<div class="justify-end pr-5">
			<MenuButton width="32" {onClick} />
		</div>
	</div>
</body>
