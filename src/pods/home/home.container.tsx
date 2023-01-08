import React, { useEffect, useState } from "react";
import { getPodcastList } from "./api/api";
import { Home } from "./home.component";
import { PodcastEntity } from "./podcastList.vm";
import { ListContext } from "@/core/listContext/list";
import { useDebounce } from "use-debounce";

export const HomeContainer = () => {

    //const [list, setList] = useState<PodcastEntity[]>([]);
    const { list, setList } =  React.useContext(ListContext);
    const [search, setSearch] = useState<PodcastEntity[]>([]);
    const [debounce] = useDebounce(search, 1000);

    useEffect(()=>{
        getPodcastList().then(setList);
        
    },[]);
    useEffect(()=>{
        setSearch([]);
        setSearch(list);
    },[list]);
    
    const handleFilter = (filter:string) => {
        setSearch([]);
        console.log(search);
        
        list.filter(l=>{
        if(l.title.label.toLowerCase().includes(filter.toLowerCase())===true){
        
            console.log(l);
            setSearch([...search, l]);
            
        }
       });
    };
    return (
    <>
    <Home podcasts={search} onFilter={handleFilter}/>
    </>
    );
};
