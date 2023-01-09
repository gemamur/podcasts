import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/core/router";
import { PodcastEntity } from "../../podcastList.vm";
import "./card.scss";

interface Props {
    podcast: PodcastEntity
}

export const Card = (props:Props) => {
    const {podcast} = props;

    return(
    <>
        <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
        <div className="card">
            <img src={podcast["im:image"][podcast["im:image"].length-1].label} />
            <div className="title">{podcast["im:name"].label}</div>
            <div>Author: {podcast["im:artist"].label}</div>
        </div>
        </Link>
    </>
    );
}