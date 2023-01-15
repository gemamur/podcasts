import React, {useState, useEffect} from "react";
import { getPodcastDetail } from "@/common/podcast/api/api";
import { getPodcastXml } from "@/common/podcast/api/api";
import { Podcast } from "./podcast.component";
import { useParams } from "react-router";
import { PodcastDetail, createEmptyPodcast } from "@/common/podcast/podcastdetail.vm";
import { Base64 } from "js-base64";
import { XmlContext } from "@/core/xmlContext/xmlContext";


export const PodcastContainer = () => {

    const [podcast, setPodcast] = useState<PodcastDetail>(createEmptyPodcast());
    const [xmlTemp, setXmlTemp] = useState<string>("");
    const {id} = useParams();
    const { xml, setXml } = React.useContext(XmlContext);


    useEffect(()=>{
        
        getPodcastDetail(id).then(setPodcast);
        
    }, [id]);
    

    useEffect(()=>{
        if(podcast.resultCount===1) {
            getPodcastXml(podcast.results[0].feedUrl).then(setXmlTemp);
        }
        
    }, [podcast]);


    useEffect(()=>{
        if(xmlTemp.includes("base64")){
            setXml(Base64.decode(xmlTemp.substring(xmlTemp.indexOf(',')+1)));
            
        }else{
            setXml(xmlTemp);
        }
    },[xmlTemp]);
    //console.log(xml);
    return( 
    <>
        <Podcast podcast={podcast} xmlDetail={xml} />
    </>
    );
};