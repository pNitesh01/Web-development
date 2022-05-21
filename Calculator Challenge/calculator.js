const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var result = num1 + num2;
    return res.send('The result of calculation is: ' + result);
});

app.get('/bmicalculator', (req, res) => {
    return res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight / (height * height);
    return res.send('Your BMI is: ' + result);
});

app.listen(3000, () => {
    console.log('server listening on port 3000');
});

