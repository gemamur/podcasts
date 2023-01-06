import React from "react";
import { useParams } from "react-router-dom";

export const EpisodeScene = () => {

    const {id, idEpisode} = useParams();
    console.log(id);
    console.log(idEpisode);
    return <>episode scene</>
}