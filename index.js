import { scraper } from './pageScraper.js';
import express from 'express';

const app = express()
const port = 3001

app.get('/run', async (req, res) => {
    res.send(await scraper(req.query.keyword,req.query.page))
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})
