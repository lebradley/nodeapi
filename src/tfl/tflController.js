const request = require('request');
const app_id = process.env.TFL_APP_ID
const app_key = process.env.TFL_KEY

let createAppKeyString = () => {
    return 'app_id=' + app_id + '&app_key=' + app_key; 
};

let sayhello = function(req, res) {
    res.send('hello I am TFL');
};

let getLineInfoById = function(req, res) {
    let id = req.params.id;
    let url = 'https://api.tfl.gov.uk/Line/' + id + '?app_id=fc87d416&app_key=6a023cb0afdc98dfb67f6b4f4810d48d';
    request(url, function(error, response, body) {
        if(error) console.log('error:' + error);
        b = JSON.parse(response.body);
        b = b[0];
        if(b.disruptions.length > 0) res.send(b.disruptions);
        res.send('No disruptions');
    })
};

let airQuality = function(req, res) {
    let url = 'https://api.tfl.gov.uk/AirQuality'
    request(url, function(error, response, body){
        if(error) console.log('error:' + error);
        b = JSON.parse(response.body);
        res.send(b);
    });
};

let jupiter = function(req, res) {
    request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', function (error, response, body) {
        if (error) console.log('error:' + error);
        body = JSON.parse(body);
        res.send(body.explanation);
    }
)};

module.exports = {
    sayhello,
    getLineInfoById,
    airQuality,
    jupiter
}