const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

constapp = express();
const port = process.env.PORT || 3000;

app.get('/price', async (req, res) => {
    try {
        const response = await axios.get("https://www.metal.com/Lithium-ion-Battery/202303240001");
        const $ = cheerio.load(response.data);

        const price = $('.strong___1JlBD').text();
        res.json({ price: price });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch price' });
    }

});
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Invalid API call' });
});
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});