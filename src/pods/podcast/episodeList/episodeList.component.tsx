import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import XMLParser from "react-xml-parser";
import { XmlContext } from '@/core/xmlContext/xmlContext';
import { parseDuration, parsePubDate } from './episodeList.business';

interface PodcastItem {
    title: string;
    date: string;
    Duration: string;
}

export const EpisodeList =  () => {
    
    const [items, setItems] = useState<PodcastItem[]>([]);
    const {xml} = React.useContext(XmlContext);


    useEffect(()=>{
        let newItems = [];

        if(xml.length>0){
            
            var xmlDetail = new XMLParser().parseFromString(xml);
            
            xmlDetail.getElementsByTagName('item').map((item) => {
               
                let duration:string;
                let formatedDate: string;
                
                duration = parseDuration(item);
                formatedDate = parsePubDate(item);
            
                newItems = [...newItems, {title: item.children.filter(obj=> obj.name==="title")[0].value, 
                date: formatedDate, 
                Duration: duration
                }]
                
            });
            setItems(newItems); 
        }
    }, [xml]);
    
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
                                <div><Link to="episode/3">{item.title}</Link></div>
                                <div>{item.date}</div>
                                <div>{item.Duration}</div>
                            </li>
                        ))}
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
    );
}