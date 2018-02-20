module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('Hey there! I\'m an api');
    });
    
    app.get('/js/info', (req, res) => {
        res.send('Single, Weakly Typed');
    });
}
