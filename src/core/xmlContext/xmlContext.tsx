import React, { useState } from "react";

interface podCastInfo {
    id: string;
    xml: string;
}


interface xmlContext {
    // podCastInfo : PodCastInfo[];
    xml: string;
    setXml: (xml:string) => void;
}

export const XmlContext = React.createContext<xmlContext>({
    xml: "",
    setXml: value => {
        console.log("XmlContext, forgot provider?");
    },
});

interface Props {
    children: React.ReactNode;
}

export const XmlProvider:React.FC<Props> = (props:Props) => {

    const {children} = props;

    const [xml, setXml] = useState("");

    return (
        <XmlContext.Provider value={{xml, setXml}}>
            {children}
        </XmlContext.Provider>
    );
}