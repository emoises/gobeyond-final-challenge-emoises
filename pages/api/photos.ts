import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    const {ratio} = req.query;
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos',{
        params:{
            _start: 350,
            _limit:4
        }
    });

    const dataResponse: PhotoProps[] = await response.data;

    const photos = dataResponse.map( photo => {
        const part1 = photo.url.substring(0,28)
        const part2 = photo.url.substring(31)
        const newUrl = `${part1}${ratio}${part2}`
        return {
            ...photo,
            url: newUrl
        }
    });

res.status(200).json({photos})
}
