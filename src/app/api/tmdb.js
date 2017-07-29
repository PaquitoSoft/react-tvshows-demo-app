import { getJson } from '../plugins/ajax';

// Our current limits are 40 requests every 10 seconds and are limited by IP address, not API key
const BASE_API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eddf5d49244134d1e874e1915d41d6e4';

export function getPopularTvShows(page = 1) {
	return getJson(`${BASE_API_URL}/tv/popular?page=${page}&api_key=${API_KEY}`, { ttl: 30 });
}

export function getTopRatedTvShows(page = 1) {
	return getJson(`${BASE_API_URL}/tv/top_rated?page=${page}&api_key=${API_KEY}`, { ttl: 30 });
}

export function getUpcomingTvShows(page = 1) {
	return getJson(`${BASE_API_URL}/tv/latest?page=${page}&api_key=${API_KEY}`, { ttl: 30 });
}

export function getNowPlayingTvShows(page = 1) {
	return getJson(`${BASE_API_URL}/tv/on_the_air?page=${page}&api_key=${API_KEY}`, { ttl: 30 });
}

export function getTvShowDetails(tvShowId) {
	return getJson(`${BASE_API_URL}/tv/${tvShowId}?api_key=${API_KEY}`, { ttl: 60 * 24 });
}
