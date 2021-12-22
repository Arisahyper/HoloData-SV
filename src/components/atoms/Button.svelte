<script lang="ts">
	export let text: string = 'Primary';
	export let onClick = () => {};
</script>

<button
	class="btn btn-primary bg-blue-500 rounded-3xl hover:bg-black duration-200"
	on:click={onClick}
>
	<p class="my-2 mx-5 text-white">{text}</p>
</button>
