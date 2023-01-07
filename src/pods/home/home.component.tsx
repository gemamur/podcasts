import React, { useState } from "react";
import {Link} from "react-router-dom";
import { PodcastEntity } from "./podcastList.vm";


interface Props {
    podcasts:PodcastEntity[];
}




export const Home = (props:Props) => {

    const {podcasts} = props;
    console.log(podcasts);

    return <>Podcast</>
}