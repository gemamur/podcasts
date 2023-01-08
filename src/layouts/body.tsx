import React from "react";
import "./bodycontainer.scss";

interface Props {
    children: React.ReactNode;
}

export const BodyContainer:React.FC<Props> = ({children}) => {

    return(<>
    <div className="container">
        {children}
    </div>
    </>)
}