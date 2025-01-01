import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key':'58caa4f29dmsh727b69017c5d2aap153d99jsndcacdee00282',
      'X-RapidAPI-Host': 
      'youtube-v31.p.rapidapi.com'
    }
  };
// /BASE_URL/getVideos

  export const fetchFromAPI=async(url)=>{
    console.log(`${BASE_URL}/${url}`);
    // How to make get API call using axioms
    const {data}=await axios.get(`${BASE_URL}/${url}`,
    options);


    return data;
  }