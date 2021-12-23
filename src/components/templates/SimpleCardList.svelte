<script lang="ts">
	import LinkBand from '../molecules/LinkBand.svelte';
	import axios from 'axios';

	async function getHoloList() {
		const res = await axios.get('https://schedule.hololive.tv/api/list/7');
		return res.data.dateGroupList;
	}

	let promise: Promise<any> = getHoloList();
</script>

<div>
	<div class="">
		{#await promise}
			<div class="text-center">
				<img
					width="100%"
					src="https://c.tenor.com/ugHMd4srOb8AAAAd/minato-aqua-hololive.gif"
					alt=""
				/>
			</div>
		{:then dateGroupList}
			{#each [...dateGroupList].reverse() as date}
				<div class=" border-b border-gray-400 w-1/3 ml-4 pt-3">
					<h1 class="text-3xl">{date.displayDate}</h1>
				</div>
				<div class="flex flex-wrap">
					{#each date.videoList as data}
						<div class="w-full py-1 px-4">
							<LinkBand href={data.url} title={data.title} src={data.talent.iconImageUrl} />
						</div>
					{/each}
				</div>
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</div>
