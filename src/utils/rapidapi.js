import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://youtube138.p.rapidapi.com'


const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com',
	}
}; 

// In-memory cache to store API responses
const cache = {};

export const fetchData = async (url) => {
    // If the data is already in the cache, return it immediately
    if (cache[url]) {
        console.log(`Serving from cache: ${url}`);
        return cache[url];
    }

    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        // Save the successful response to the cache
        cache[url] = data;
        return data;
    } catch (error) {
        console.error('error fetching data', error);
        throw error;
    }
};