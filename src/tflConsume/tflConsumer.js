const Request = require('request');

url = 'http://cloud.tfl.gov.uk/TrackerNet/LineStatus';

module.exports = function(app) {

//Sprays out the XML document for line status, not really sure how
// maybe break this up into method? app.Get() calls get me tfl() and define that elsewhere
    app.get('/tfl/linestatus', (req, res) => {
        Request({
            uri: url,
            app_id: 2,
            app_key: 1
        }).pipe(res);
    });
}
