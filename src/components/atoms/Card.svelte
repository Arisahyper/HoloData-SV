<script lang="ts">
	export let icon: string = '';
	export let href: string = 'https://google.com';
	export let title: string = 'Card Title';
	export let src: string =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJ6QkAlJtgAGt16zT690Cq-vdbDqvBAGB5Q&usqp=CAU';
	export let alt: string = '';
	export let date: string = '2021/2/21'; // 要命名
	export let name: string = '';
	export let isLive: string = '';
	export let videoUrl: string = '';
	isLive;

	import { url, liverName, liverIconUrl, startedAt, description } from '../../stores/playVideo';
	const clickHandler = () => {
		$url = videoUrl;
		$liverName = name;
		$liverIconUrl = icon;
		$startedAt = date;
		$description = title;
	};
</script>

<body>
	<div class="rounded shadow-md border-solid border border-gray-200">
		<a {href} target="">
			<button on:click={clickHandler}>
				<div class="flex items-center pl-3 py-2">
					<img class="rounded-full" src={icon} alt="" width="40" />
					<h1 class="p-3 font-bold">{name}</h1>
				</div>
				<img {src} {alt} width="100%" />
				<p class="text-gray-600 pl-3 pt-2 tracking-wider text-left">{date}</p>
				<p class="p-3 text-left">{title}</p>
			</button>
		</a>
	</div>
</body>
