import axios from "axios";
import { PodcastDetail } from "../podcastdetail.vm";


export const getPodcastDetail = (id:string):Promise<PodcastDetail> => {
    
     return axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}`)}`)
    .then(response => JSON.parse(response.data.contents));

}

export const getPodcastXml = (url:string):Promise<string> => {
    
    return axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
    .then((response) => response.data.contents )
    .catch((error)=> console.log(error));  
}