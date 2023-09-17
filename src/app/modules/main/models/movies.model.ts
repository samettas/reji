export class MoviesModel {

    actorsid?:ActorData[];
    description?:string;
    duration?: string;
    image?:ImageData[];
    movieName?:string;
    releaseDate?:string;
    thumbnail?:ThumbNail[];
    trailers?:string[];
}
export class ImageData{
    src?:string;
}
export class ActorData{
    label?:string;
}
export class ThumbNail{
    src?:string;
}