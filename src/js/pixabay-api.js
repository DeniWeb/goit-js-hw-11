import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48809440-7649b5744f5d98f4a92a91a9c';
const PER_PAGE = 15;

export function fetchImages(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
    };

    return axios
        .get(BASE_URL, { params })
        .then(response => {
            if (response.data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return [];
            }
            return response.data.hits;
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'Something went wrong. Please try again later!',
                position: 'topRight',
            });
            return [];
        });
}
