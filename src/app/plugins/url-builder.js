const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/';

/*
	poster_sizes:
	"w92",
	"w154",
	"w185",
	"w342",
	"w500",
	"w780",
	"original"
*/
const allowedSizes = [92, 154, 185, 342, 500, 780];

function getAllowedSize(imgWidth) {
	for (let i = 0, len = allowedSizes.length; i < len; i++) {
		if (allowedSizes[i] >= imgWidth) {
			return `w${allowedSizes[i]}`;
		}
	}
	return 'original';
}

export function getPosterUrl(posterPath, width) {
	return `${IMAGES_BASE_URL}${getAllowedSize(width)}${posterPath}`;
}
