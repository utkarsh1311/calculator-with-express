const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var op = req.body.op;
	var result = 0;
	switch (op) {
		case "+":
			result = num1 + num2;
			res.send(`The sum of ${num1} and ${num2} is ${result}`);
			break;
		case "-":
			result = num1 - num2;
			res.send(`The difference of ${num1} and ${num2} is ${result}`);
			break;
		case "*":
			result = num1 * num2;
			res.send(`The product of ${num1} and ${num2} is ${result}`);
			break;
		case "/":
			result = num1 / num2;
			res.send(`The division of ${num1} and ${num2} is ${result}`);
			break;
		default:
			res.send("Undefined operator");
			break;
	}
});

app.get("/bmiCalculator", (req, res) => {
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
	var height = Number(req.body.height);
	var weight = Number(req.body.weight);

	var bmi = weight / (height * height);

	res.send(`Your BMI is ${bmi}`);
});

app.listen(port, () => {
	console.log("Server started at 3000");
});
