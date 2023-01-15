export const parsePubDate = (item : any) => 
  (item.children.filter(obj=> obj.name==="pubDate").length>0) ?
    new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'numeric', day: 'numeric'}).format(Date.parse(item.children.filter(obj=> obj.name==="pubDate")[0].value))
  :
    "";

export const parseDuration = (item:any) => {
    let duration: string;
    let time: number;
    if(item.children.filter(obj=>obj.name=="itunes:duration").length>0){
                    
        if(item.children.filter(obj=>obj.name=="itunes:duration")[0].value.includes(":")){
            duration = item.children.filter(obj=> obj.name==="itunes:duration")[0].value;
        }else{
            time = parseInt(item.children.filter(obj=> obj.name==="itunes:duration")[0].value); duration = ((time-(time%=60))/60+(9<time?':':':0')+time);
        }
    }else{
        duration = "0";
    }
    return duration;
}

