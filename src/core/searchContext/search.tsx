import React, { useState } from "react";
import { PodcastEntity } from "@/pods/home/podcastList.vm";


interface SearchContext {
    search: PodcastEntity[];
    setSearch: (search:PodcastEntity[]) => void;
}

export const SearchContext = React.createContext<SearchContext>({
    search: [],
    setSearch: value => {
        console.log("SearchContext, forgot provider?");
    },
});

interface Props {
    children: React.ReactNode;
}

export const SearchProvider:React.FC<Props> = (props:Props) => {

    const {children} = props;

    const [search, setSearch] = useState([]);

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    );
}