<script lang="ts">
	import Card from '../atoms/Card.svelte';
	import SmartCard from '../atoms/SmartCard.svelte';
	import axios from 'axios';
	import { isOnAir } from '../../stores/isLive';

	async function getHoloList() {
		const res = await axios.get('https://schedule.hololive.tv/api/list/7');
		return res.data.dateGroupList;
	}

	let promise: Promise<any> = getHoloList();

	const url = '/watchpage';
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
				{#if date.videoList.length == 0}
					<div class="text-center py-10">
						<h1>No Video</h1>
					</div>
				{/if}
				<div class="flex flex-wrap">
					{#if $isOnAir}
						{#each date.videoList as data}
							{#if data.platformType == 1}
								{#if data.isLive == true}
									<div class="w-full py-1 px-3">
										<SmartCard
											icon={data.talent.iconImageUrl}
											name={data.name}
											href="/watchpage"
											title={data.title}
											src={data.thumbnail}
											date={data.datetime}
											videoUrl={data.url}
										/>
									</div>
								{/if}
							{/if}
						{/each}
					{:else}
						{#each date.videoList as data}
							{#if data.platformType == 1}
								<div class="w-full py-1 px-3">
									<SmartCard
										icon={data.talent.iconImageUrl}
										name={data.name}
										href="/watchpage"
										title={data.title}
										src={data.thumbnail}
										date={data.datetime}
										videoUrl={data.url}
									/>
								</div>
							{/if}
						{/each}
					{/if}
				</div>
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</div>
