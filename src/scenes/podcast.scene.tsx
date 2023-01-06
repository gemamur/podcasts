import React from "react";
import { useParams } from "react-router-dom";
import {PodcastContainer} from "@/pods/podcast"

export const PodcastScene = () => {

    const {id} = useParams();
    console.log(id);
    return <><PodcastContainer /></>
}