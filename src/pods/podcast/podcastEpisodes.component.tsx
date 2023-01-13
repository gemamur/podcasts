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
                let time: number;
                let duration:string;
                let formatedDate: string;
                if(item.children.filter(obj=>obj.name=="itunes:duration").length>0){
                    let timeString: string;
                    if(item.children.filter(obj=>obj.name=="itunes:duration")[0].value.includes(":")){
                        duration = item.children.filter(obj=> obj.name==="itunes:duration")[0].value;
                    }else{
                        time = parseInt(item.children.filter(obj=> obj.name==="itunes:duration")[0].value); duration = ((time-(time%=60))/60+(9<time?':':':0')+time);
                    }
                }else{
                    duration = "0";
                }
                    if(item.children.filter(obj=> obj.name==="pubDate").length>0){
                        formatedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'numeric', day: 'numeric'}).format(Date.parse(item.children.filter(obj=> obj.name==="pubDate")[0].value));
                    }else{
                        formatedDate = "";
                    }
                setItems(items=>[...items, 
                {title: item.children.filter(obj=> obj.name==="title")[0].value, 
                date: formatedDate, 
                Duration: duration
                }]);
                console.log(item.children.filter(obj=> obj.name==="pubDate"));
                // console.log(item.children.filter(obj=>obj.name=="itunes:duration").length);
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
                                <div>{item.title}</div>
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