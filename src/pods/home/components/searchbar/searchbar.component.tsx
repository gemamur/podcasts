import React, {useState} from "react";

interface Props {
    onFilter: (search:string) => void;
}

export const SearchBar = (props:Props) => {
    const {onFilter} = props;
    return (
        <>
            <input type="text"  onChange={(e)=>onFilter(e.target.value)}/>
        </>
    )
}