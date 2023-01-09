import { switchRoutes } from "@/core/router";
import React from "react";
import {Link} from "react-router-dom";
import "./header.scss";



export const Header:React.FC = () => {
    return (
    <>
    <div className="header">
        <Link to={switchRoutes.root}>Podcaster</Link>
    </div>
    </>
    );
}