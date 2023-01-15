import React, {useState,useEffect} from "react";
import "./podcast.scss";
import { PodcastDetail } from "@/common/podcast/podcastdetail.vm";
import { PodcastDetailComponent } from "@/common/podcast/podcastDetail.component";
import { Outlet } from "react-router";

interface Props {
    podcast: PodcastDetail;
    xmlDetail: string;
}

export const Podcast = (props:Props) => {
    const {podcast, xmlDetail} = props;
    
    // console.log(podcast);
    // console.log(xmlDetail);
    return (
    <>
    <div className="podcast">
        
        <PodcastDetailComponent podcast={podcast} xmlDetail={xmlDetail} />
        <Outlet />
    </div>
    
    </>
    );
}