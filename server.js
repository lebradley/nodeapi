const app = require('./src/app');

let port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log('server up and running on port :', port);
});