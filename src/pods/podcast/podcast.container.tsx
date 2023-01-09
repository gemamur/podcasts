
import React, {useState, useEffect} from "react";
import { getPodcastDetail } from "./api/api";
import { getPodcastXml } from "./api/api";
import { Podcast } from "./podcast.component";
import { useParams } from "react-router";
import { PodcastDetail, createEmptyPodcast } from "./podcastdetail.vm";


export const PodcastContainer = () => {

    const [podcast, setPodcast] = useState<PodcastDetail>(createEmptyPodcast());
    const [xmlDetail, setXmlDetail] = useState<string>("");
    const {id} = useParams();

    useEffect(()=>{
        getPodcastDetail(id).then(setPodcast);
        getPodcastXml().then(setXmlDetail);
    }, []);

    return( 
    <>
        <Podcast podcast={podcast} xmlDetail={xmlDetail} />
    </>
    );
};