<script lang="ts">
	export let href: string = 'https://google.com';
	export let title: string = 'Card Title';
	export let src: string =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJ6QkAlJtgAGt16zT690Cq-vdbDqvBAGB5Q&usqp=CAU';
	export let alt: string = '';
	export let date: string = '2021/2/21'; // 要命名
	export let description: string =
		'ここは説明欄です。ここは説明欄です。ここは説明欄です。ここは説明欄です。ここは説明欄です。ここは説明欄です。ここは説明欄です。';
</script>

<body>
	<div class="rounded shadow-md border-solid border border-gray-200">
		<a {href}>
			<h1 class="p-3">{title}</h1>
			<img {src} {alt} width="100%" />
			<p class="text-gray-600 pl-3 pt-2">{date}</p>
			<p class="p-3">{description}</p>
		</a>
	</div>
</body>
