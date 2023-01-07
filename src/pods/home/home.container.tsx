import React, { useEffect, useState } from "react";
import { getPodcastList } from "./api/api";
import { Home } from "./home.component";

export const HomeContainer = () => {

    const [list, setList] = useState([]);

    useEffect(()=>{
        getPodcastList().then(setList);
    },[])
    return <><Home podcasts={list}/></>
};
