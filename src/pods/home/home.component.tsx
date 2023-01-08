import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import React, { useState, useEffect } from "react";
import { SearchBar } from "./components/searchbar/searchbar.component";
import { PodcastEntity } from "./podcastList.vm";
import { Card } from "./components/card/card.component";
import "./home.scss";

interface Props {
    podcasts:PodcastEntity[];
    onFilter: (search:string) => void;
}

export const Home = (props:Props) => {

    const {podcasts, onFilter} = props;
    

    return (
    <>
    <SearchBar onFilter={onFilter}/>
    <ul className="list">
        {podcasts.map( (podcast, index) => 
        <li key={index}>
            <Card podcast={podcast} />
        </li>)}
    </ul>
    
    </>
    );

}