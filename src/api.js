import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID qBKPOJogY8wyiuRG8UOJn9LfnWdgsHuMQKuKEIBP4a8',
        },
        params: {
            query: term,
        }
    });

    console.log(response.data.results);
    return response.data.results;
}

export default searchImages;