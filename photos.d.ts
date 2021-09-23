interface PhotoProps{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
interface DataPhotoProps{
    photos: PhotoProps[];
}