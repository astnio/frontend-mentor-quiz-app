const liveSiteDataPath =
	'/frontend-mentor-time-tracking-dashboard/src/data.json';
const localSiteDataPath = './src/data.json';

/*** Set this to false if testing from local environment ***/
const isSiteLive = false;

const dataPath = isSiteLive ? liveSiteDataPath : localSiteDataPath;

async function loadData(dataLocation) {
	try {
		const response = await fetch(dataLocation);
		if (!response.ok) {
			throw new Error('Error reading data!');
		}
		return await response.json();
	} catch (error) {
		console.error('Error reading data ', error);
		return null;
	}
}

export const data = await loadData(dataPath);
