const express = require('express')
const app = express()
const port = 3000
const request = require('request');
var cors = require('cors')

app.use(cors())

app.get('/cryptos', (req, res) => {
    var options = {
        'method': 'GET',
        'url': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        'headers': {
            'X-CMC_PRO_API_KEY': 'XXXXXXXXXXXXXXXXXXXXXXXXXX',
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(JSON.parse(response.body));
    });
})

app.listen(port, () => {
    console.log(`Crypto app listening at http://localhost:${port}`)
})
