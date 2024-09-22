// const dataPath = '/frontend-mentor-time-tracking-dashboard/src/data.json';
const dataPath = './src/data.json';

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
