import React, { useEffect, useState } from "react";
import { getPodcastList } from "./api/api";
import { Home } from "./home.component";
import { ListContext } from "@/core/listContext/list";
import { SearchContext } from "@/core/searchContext/search";

export const HomeContainer = () => {

    const { list, setList } =  React.useContext(ListContext);
    const { search, setSearch } = React.useContext(SearchContext);

    useEffect(()=>{
        getPodcastList().then(setList);
    },[]);

    useEffect(()=> {
        setSearch(list);
    },[list]);

    
    const handleFilter = (filter:string) => {
        setSearch(list.filter(item=>(((item["im:artist"].label.toLowerCase()).includes(filter.toLowerCase()))||((item["im:name"].label.toLowerCase()).includes(filter.toLowerCase()))) ));
    };
    return (
    <>
        <Home podcasts={search} onFilter={handleFilter} />
    </>
    );
};
