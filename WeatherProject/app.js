const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');

});

app.post('/', (req, res) => {

    const query = req.body.cityName;
    const apiKey = "c59d36fe3e428f123c0690677d5a062e";
    const units = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
    https.get(url, (response) => {
        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const weatherTemp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temperature in London is " + weatherTemp + " degree Celcius.</h1>");
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
    });

});



app.listen(3000, () => {
    console.log("Server started on port 3000.");
});

