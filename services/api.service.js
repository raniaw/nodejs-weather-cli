import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return 'âī¸';
		case '02':
			return 'đ¤ī¸';
		case '03':
			return 'âī¸';
		case '04':
			return 'âī¸';
		case '09':
			return 'đ§ī¸';
		case '10':
			return 'đĻī¸';
		case '11':
			return 'đŠī¸';
		case '13':
			return 'âī¸';
		case '50':
			return 'đĢī¸';
	}
};

const getWeather = async (city) => {
	const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
	if (!token) {
		throw new Error('Api key not specified, set it via command -t [API_KEY]');
	}
	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			lang: 'de',
			units: 'metric'
		}
	});
	//console.log(data);
	return data;
};

export { getWeather, getIcon };