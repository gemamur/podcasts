import React from "react";
import { PodcastEntity } from "../../podcastList.vm";
import "./card.scss";

interface Props {
    podcast: PodcastEntity
}

export const Card = (props:Props) => {
    const {podcast} = props;

    return(
    <>
        <div className="card">
            <img src={podcast["im:image"][podcast["im:image"].length-1].label} />
            <div className="title">{podcast["im:name"].label}</div>
            <div>Author: {podcast["im:artist"].label}</div>
        </div>
        
    </>
    );
}