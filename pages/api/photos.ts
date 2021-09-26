import { NextApiRequest, NextApiResponse } from 'next';
import {imagesUrl, thumbnailUrl, corebiz, menu} from '../../helpers'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const photos = menu.map( (item, idx) => {
        return {
            albumId: idx,
            id: idx,
            title: corebiz[idx],
            url: imagesUrl[idx],
            thumbnailUrl: thumbnailUrl[idx],
            link: item.link,
            label: item.title
        }
    })
   
res.status(200).json(photos)
}
