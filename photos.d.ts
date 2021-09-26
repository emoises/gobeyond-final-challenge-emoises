interface PhotoProps{
    albumId: number;
    id: number;
    title: string;
    url: string
    thumbnailUrl: string;
    link: string;
    label: string;
}
// interface PhotoProps{
//     albumId: number;
//     id: number;
//     title: string;
//     url: string;
//     thumbnailUrl: string;
// }
interface DataPhotoProps{
    photos: PhotoProps[];
    name?: "mobile" | "desktop";
    isVertical?: boolean;
}

interface ApiImageProps {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
interface ApiProps {
    data: PhotoProps[];
}