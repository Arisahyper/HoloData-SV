<script lang="ts">
	interface MenuList {
		title: string;
		url: string;
	}

	export let menuList: MenuList[] = [
		{
			title: 'sample',
			url: 'https://google.com'
		},
		{
			title: 'sample',
			url: 'https://google.com'
		},
		{
			title: 'sample',
			url: 'https://google.com'
		},
		{
			title: 'sample',
			url: 'https://google.com'
		}
	];

	export const onClick = () => {};
</script>

<body>
	<div class="rounded-md bg-blue border border-solid border-gray-200">
		<!-- <div class="py-3 bg-gray-100 rounded-t-md">
			<div class="flex justify-end pr-5">
				<MenuButton {icon} {onClick} />
			</div>
		</div> -->
		{#each menuList as menu}
			<div class="m-4">
				<a href={menu.url} target="_blank">
					<p class="pl-4 text-blue-500">{menu.title}</p>
				</a>
			</div>
		{/each}
	</div>
</body>
