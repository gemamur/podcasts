import React from "react";
import "./header.scss";

interface Props {
    children: React.ReactNode;
}

export const Header:React.FC<Props> = ({children}) => {
    return (
    <>
    <div className="header">Podcaster</div>
    {children}
    </>
    );
}