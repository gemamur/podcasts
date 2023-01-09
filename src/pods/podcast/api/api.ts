import axios from "axios";
import { PodcastDetail } from "../podcastdetail.vm";


export const getPodcastDetail = (id:string):Promise<PodcastDetail> => {
     return axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}`)}`)
    .then(response => JSON.parse(response.data.contents));

}

export const getPodcastXml = () => {
 return   axios.get("https://mcsorleys.barstoolsports.com/feed/million-dollaz-worth-of-game")
.then((response) => response.data )
.catch((error)=> console.log(error));  
}