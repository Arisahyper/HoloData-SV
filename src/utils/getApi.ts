import axios from 'axios';

export function test(): boolean {
	console.log('getApi');
	return false;
}

interface Props {
	name: string;
	title: string;
	icon: string;
	streamUrl: string;
	thumbnail: string;
	date: string;
	isLive: boolean;
}

export function getApi(): Props[] {
	const videoInfo: Props[] = [];
	axios.get('https://schedule.hololive.tv/api/list/7').then((res) => {
		const dateGroupCount: number = res.data.dateGroupList.length - 1;
		for (let i = dateGroupCount; i >= 0; i--) {
			const data = res.data.dateGroupList[i].videoList;
			for (let j = 0; j < data.length; j++) {
				if (data[j].platformType === 1) {
					videoInfo.push({
						name: data[j].name,
						icon: data[j].talent.iconImageUrl,
						title: data[j].title,
						date: data[j].datetime,
						thumbnail: data[j].thumbnail,
						streamUrl: data[j].url,
						isLive: data[j].isLive
					});
				}
			}
		}
	});
	return videoInfo;
}

// {
// 	name: data[j].name,
// 	icon: data[j].talent.iconImageUrl,
// 	title: data[j].title,
// 	date: data[j].datetime,
// 	thumbnail: data[j].thumbnail,
// 	streamUrl: data[j].url,
// 	isLive: data[j].isLive
// }

// console.log(res.data.dateGroupList[0].datetime);
// // その日の動画の数
// console.log(res.data.dateGroupList[0].videoList.length);
// // 1個目の動画情報
// console.table(res.data.dateGroupList[0].videoList[0]);
// // タレント名
// console.log(res.data.dateGroupList[0].videoList[0].name);
// // アイコンURL
// console.log(res.data.dateGroupList[0].videoList[0].talent.iconImageUrl);
// // タイトル
// console.log(res.data.dateGroupList[0].videoList[0].title);
// // サムネイルURL
// console.log(res.data.dateGroupList[0].videoList[0].thumbnail);
// // 動画URL
// console.log(res.data.dateGroupList[0].videoList[0].url);
// // 配信真偽
// console.log(res.data.dateGroupList[0].videoList[0].isLive);
