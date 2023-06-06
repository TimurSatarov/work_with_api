import axios from 'axios';

const searchImages = async(trem) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID 9H80jX19ADm3sYv6Gpel4xSotkXwZkcPMAnAgV7Cxuw'
        },
        params:{
            query: trem,
        }
    });
    console.log(response.data.results);
    return response.data.results;
} 

export default searchImages;