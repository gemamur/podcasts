import React, {useState, useEffect, useCallback} from 'react';
import XMLParser from "react-xml-parser";

interface Props {
    xmlDetail:string;
}

interface PodcastItem {
    title: string;
    date: string;
    Duration: string;
}

export const PodcastEpisodes =  (props:Props) => {
    
    const {xmlDetail} = props;
    const [items, setItems] = useState<PodcastItem[]>([]);
    
    useEffect(()=>{
        if(xmlDetail.length>0){
            var xml = new XMLParser().parseFromString(xmlDetail);
            
            xml.getElementsByTagName('item').map((item) => {
                
                setItems(items=>[...items, 
                {title: item.children.filter(obj=> obj.name==="itunes:title")[0].value, 
                date: item.children.filter(obj=> obj.name==="pubDate")[0].value, 
                Duration: item.children.filter(obj=> obj.name==="itunes:duration")[0].value}]);
            });
            
        }
    }, [xmlDetail.length]);

    return(
        <>
            <div className="podcast-episodes">
                <div className='total-episodes'>
                    Episodes: {items.length}
                </div>
                <div className='episodes-list'>
                    <div className='episodes-th'>
                        <p>Title</p>
                        <p>Date</p>
                        <p>Duration</p>
                    </div>
                    <div className='list-items'>
                        <ul>
                        {items.map((item:any, index) => (
                            <li key={index}>
                                {item.title} {item.date} {item.Duration}
                            </li>
                        ))}
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
    );
}