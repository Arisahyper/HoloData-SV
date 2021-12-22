import axios from 'axios';

export const getHoloList = async () => {
	try {
		const response = await axios.get('https://schedule.hololive.tv/api/list/7');
		return response;
	} catch (error) {
		console.error(error);
	}
};

getHoloList();
