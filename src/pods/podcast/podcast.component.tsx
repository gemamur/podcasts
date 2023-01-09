import React from "react";
import "./podcast.scss";
import {Link} from "react-router-dom";
import { PodcastDetail } from "./podcastdetail.vm";

interface Props {
    podcast: PodcastDetail;
}

export const Podcast = (props:Props) => {
    const {podcast} = props;
    console.log(podcast.results.at(0).artistName);
    return (
    <>
    <div className="podcast">
        
        <div className="detail">
            <div><img src={podcast.results.at(0).artworkUrl600} /></div>
            <div>{podcast.results.at(0).collectionName}</div>
            <div>{podcast.results.at(0).artistName}</div>
            
        </div>
        <div className="episodelist"></div>
        
    </div>
    
    </>
    );
}