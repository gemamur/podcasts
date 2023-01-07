import React, { useState } from "react";
import { PodcastEntityApi } from "@/pods/home/api/podcastList.apimodel";


interface ListContext {
    list: PodcastEntityApi[];
    setList: (list:PodcastEntityApi[]) => void;
}

export const ListContext = React.createContext<ListContext>({
    list: [],
    setList: value => {
        console.log("ListContext, forgot provider?");
    },
});

interface Props {
    children: React.ReactNode;
}

export const ListProvider:React.FC<Props> = (props:Props) => {

    const {children} = props;

    const [list, setList] = useState([]);

    return (
        <ListContext.Provider value={{list, setList}}>
            {children}
        </ListContext.Provider>
    );
}