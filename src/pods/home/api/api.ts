import axios from "axios";

export const getPodcastList = ()=> {
    return axios.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json").then
    ((response)=>response.data.feed.entry);
}