<script lang="ts">
	export let icon: string =
		'https://yt3.ggpht.com/DNC5rGjlwA4Ae7rhpPmkv_QdjJPl8AfpQT9NcXTLvPbbriL-Y0Ni-gYfFH8uoiF6Ay1EP9VnZAk=s176-c-k-c0x00ffffff-no-rj';
	export let href: string = 'https://google.com';
	export let title: string = 'Card Title';
	export let src: string =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJ6QkAlJtgAGt16zT690Cq-vdbDqvBAGB5Q&usqp=CAU';
	export let alt: string = '';
	export let date: string = '2021/2/21 12:00:00'; // 要命名
	export let name: string = 'さくらみこ';
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
	<div class="bg-gray-100">
		<a {href} target="">
			<div class="flex">
				<img {src} {alt} width="160px" height="90px" on:click={clickHandler} />
				<div class="flex-wrap">
					<h1 class="pt-2 pl-2 font-bold text-xs lg:text-base">{name}</h1>
					<!-- <p class="pl-2 py-0.5 text-gray-600 tracking-wider text-left text-sm">{date}</p> -->
					<!-- <p class="pl-2 text-sm">{title.slice(1, 10)}</p> -->
					<p class="pl-2 pt-1 text-xs lg:text-base">{title}</p>
				</div>
			</div>
		</a>
	</div>
</body>
