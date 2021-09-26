import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise} from 'sitemap'
import { Readable} from 'stream'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const links = [
        { url: '/', changefreq: "daily", priority: 0.3}
    ]
    const stream = new SitemapStream( {hostname: `http://${req.headers.host}`})

    res.writeHead(200, {
        "content-Type": "application/xml"
    })

    const xmlString = await streamToPromise( Readable.from(links).pipe(stream) ).then( (data) => data.toString())
    res.end(xmlString)
}