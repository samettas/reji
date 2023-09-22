export class MoviesModel {

    actorIDs?:ActorData[];
    description?:string;
    duration?: string;
    images?:ImageData[];
    movieName?:string;
    releaseDate?:string;
    thumbnail?:string;
    trailers?:string[];
    score?:number;
    movieID?:string;
}
export class ImageData{
    src?:string;
}
export class ActorData{
    label?:string;
}
