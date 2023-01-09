import React, {useState,useEffect} from "react";
import "./podcast.scss";
import {Link} from "react-router-dom";
import { PodcastDetail } from "./podcastdetail.vm";
import XMLParser from "react-xml-parser";

interface Props {
    podcast: PodcastDetail;
    xmlDetail: string;
}

export const Podcast = (props:Props) => {
    const {podcast, xmlDetail} = props;
    const [podcastData, setPodcastData] = useState(podcast.results.at(0));
    const [description, setDescription] = useState<string>("")


    useEffect(()=> {
        setPodcastData(podcast.results.at(0));
    }, [podcast]);

    useEffect(()=>{
        if(xmlDetail.length>0){
            var xml = new XMLParser().parseFromString(xmlDetail);
            setDescription(xml.getElementsByTagName('Description')[0].value);
        }
    }, [xmlDetail.length]);

    console.log(description);
    
    return (
    <>
    <div className="podcast">
        
        <div className="detail">
            <div className="detail-image"><img src={podcastData.artworkUrl600} /></div>
        
            <div className="detail-data">
                <div className="detail-title">{podcastData.collectionName}</div>
                <div className="detail-artist">by {podcastData.artistName}</div>
            </div>

            <div className="detail-description">
                <span className="description">Description:</span>
                <div dangerouslySetInnerHTML={{__html: description}} ></div>
            </div>
            
        </div>
        <div className="episodelist"></div>
        
    </div>
    
    </>
    );
}