<script lang="ts">
	import HeroIcon from '../atoms/HeroIcon.svelte';
	import { isOnAir } from '../../stores/isLive';

	export let onClick = () => {};
</script>

<button class="" on:click={onClick}>
	<div class="pr-3">
		{#if $isOnAir}
			<HeroIcon icon="heroicons-outline:play" width="32" color="red" />
		{:else}
			<HeroIcon icon="heroicons-outline:play" width="32" color="#666" />
		{/if}
	</div>
</button>
