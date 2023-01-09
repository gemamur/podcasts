
import React, {useState, useEffect} from "react";
import { getPodcastDetail } from "./api/api";
import { Podcast } from "./podcast.component";
import { useParams } from "react-router";
import { PodcastDetail, createEmptyPodcast } from "./podcastdetail.vm";


export const PodcastContainer = () => {

    const [podcast, setPodcast] = useState<PodcastDetail>(createEmptyPodcast());
    const {id} = useParams();

    useEffect(()=>{
        getPodcastDetail(id).then(setPodcast);
    }, []);

    return( 
    <>
        <Podcast podcast={podcast} />
    </>
    );
};