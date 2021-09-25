import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import {menu, corebiz} from '../../helpers';

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    const response = await axios.get('https://jsonplaceholder.typicode.com/photos',{
        params:{
            _start: 350,
            _limit:4
        }
    });

    const dataResponse: ApiImageProps[] = await response.data;

    const photos = dataResponse?.map( (photo, idx) => {
        const part1 = photo.url.substring(0,28);
        const part2 = photo.url.substring(31);
        const thumb1 = photo.thumbnailUrl.substring(0,28);
        const thumb2 = photo.thumbnailUrl.substring(31);
        const newUrl = `${part1}1130x670${part2}`;
        const newThumb = `${thumb1}150x89${thumb2}`
        return {
            ...photo,
            url: newUrl,
            link : menu[idx].link,
            title: corebiz[idx],
            thumbnailUrl: newThumb,
            label: menu[idx].title
        }
    });

res.status(200).json({photos})
}
