export interface PodcastDetail{
    resultCount: number,
    results:[{
        wrapperType:string,
        kind:string,
        artistId:number,
        collectionId:number,
        trackId:number,
        artistName:string,
        collectionName:string,
        trackName:string,
        collectionCensoredName:string,
        trackCensoredName:string,
        artistViewUrl:string,
        collectionViewUrl:string,
        feedUrl:string,
        trackViewUrl:string,
        artworkUrl30:string,
        artworkUrl60:string,
        artworkUrl100:string,
        collectionPrice:number,
        trackPrice:number,
        collectionHdPrice:number,
        releaseDate: string,
        collectionExplicitness:string,
        trackExplicitness:string,
        trackCount:number,
        trackTimeMillis:number,
        country:string,
        currency:string,
        primaryGenreName:string,
        contentAdvisoryRating:string,
        artworkUrl600:string,
        genreIds:string[],
        genres:string[]
    }]

}

export const createEmptyPodcast = ():PodcastDetail => ({
    resultCount: 0,
    results: [{
        wrapperType:"",
        kind:"",
        artistId:0,
        collectionId:0,
        trackId:0,
        artistName:"",
        collectionName:"",
        trackName:"",
        collectionCensoredName:"",
        trackCensoredName:"",
        artistViewUrl:"",
        collectionViewUrl:"",
        feedUrl:"",
        trackViewUrl:"",
        artworkUrl30:"",
        artworkUrl60:"",
        artworkUrl100:"",
        collectionPrice:0,
        trackPrice:0,
        collectionHdPrice:0,
        releaseDate: Date(),
        collectionExplicitness:"",
        trackExplicitness:"",
        trackCount:0,
        trackTimeMillis:0,
        country:"",
        currency:"",
        primaryGenreName:"",
        contentAdvisoryRating:"",
        artworkUrl600:"",
        genreIds:[""],
        genres:[""]
        }
    ]
    
    });

    export interface PodcastObject {
        wrapperType:string,
        kind:string,
        artistId:number,
        collectionId:number,
        trackId:number,
        artistName:string,
        collectionName:string,
        trackName:string,
        collectionCensoredName:string,
        trackCensoredName:string,
        artistViewUrl:string,
        collectionViewUrl:string,
        feedUrl:string,
        trackViewUrl:string,
        artworkUrl30:string,
        artworkUrl60:string,
        artworkUrl100:string,
        collectionPrice:number,
        trackPrice:number,
        collectionHdPrice:number,
        releaseDate: string,
        collectionExplicitness:string,
        trackExplicitness:string,
        trackCount:number,
        trackTimeMillis:number,
        country:string,
        currency:string,
        primaryGenreName:string,
        contentAdvisoryRating:string,
        artworkUrl600:string,
        genreIds:string[],
        genres:string[]
    }