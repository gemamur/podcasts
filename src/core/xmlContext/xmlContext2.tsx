import React, { createContext, createRef, useContext } from "react";

const xml = createRef();
export const XmlContext = React.createContext(xml)


interface Props {
    children: React.ReactNode;
}

export const XmlProvider:React.FC<Props> = (props:Props) => {

    const {children} = props;

    return (
        <XmlContext.Provider value={xml}>
            {children}
        </XmlContext.Provider>
    );
}