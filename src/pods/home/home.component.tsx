import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import React, { useState, useEffect } from "react";
import { SearchBar } from "./components/searchbar/searchbar.component";
import { PodcastEntity } from "./podcastList.vm";

interface Props {
    podcasts:PodcastEntity[];
    onFilter: (search:string) => void;
}

export const Home = (props:Props) => {

    const {podcasts, onFilter} = props;
    

    return (
    <>
    <SearchBar onFilter={onFilter}/>
    <ul>
        {podcasts.map( (podcast, index) => <li key={index}>{podcast["im:name"].label}</li>)}
    </ul>
    
    </>
    );

}