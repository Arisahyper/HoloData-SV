<script>
	import Title from '../molecules/Title.svelte';
	import MenuButton from '../atoms/MenuButton.svelte';
</script>

<body>
	<div class=" h-16 shadow border-solid border-b border-gray-300 flex justify-between items-center">
		<div class="pl-5">
			<Title />
		</div>
		<div class="justify-end pr-5">
			<MenuButton
				width="32"
				onClick={() => {
					console.log('Menu button clicked');
				}}
			/>
		</div>
	</div>
</body>
