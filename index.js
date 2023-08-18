const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the express application
const app = express();
app.use(bodyParser.json())

function index(req, res) {
  console.log({headers: req.headers})
  console.log({body: req.body})
  let number = req.query.number
  let answer = 0
  
  try {
    answer = sumTillNumber(number)
  } catch (e) {
    return res.status(400).send({ error: e.message, description: `${number} is not a valid number` });
  }
  
  return res.send(`${answer}`);
}

// Define route to handle HTTP GET request
app.get('/', index);

// Start the server and listen on a specific port
const port = 3000;
app.listen(port, () => {
    console.clear()
    console.log(`Server is listening on port http://localhost:${port}`);
});


function sumTillNumber(n) {
  n = parseInt(n)
  console.log(n, typeof n, isNaN(n))
  if (isNaN(n)) throw new Error('Please enter a valid number')
  let answer = 0
  for (let i = 1; i <= n; i++) {
    answer+=i
  }
  return answer
}