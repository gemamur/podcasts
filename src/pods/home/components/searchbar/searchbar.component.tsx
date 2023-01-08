import React, {useState} from "react";
import "./searchbar.scss";

interface Props {
    onFilter: (search:string) => void;
}

export const SearchBar = (props:Props) => {
    const {onFilter} = props;
    return (
        <>
            <div className="searchbar">
                <input type="text" className="search-input" placeholder="Filter podcasts..." onChange={(e)=>onFilter(e.target.value)}/>
            </div>
        </>
    )
}