const express = require('express');

// Create an instance of the express application
const app = express();

// Our custom middleware
function customMiddleware(req, res, next){
  console.log("Custom middleware was executed!");

  // Call the next middleware in the stack
  next();
}

app.use(customMiddleware)

function index(req, res) {
  let number = req.query.n
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
    console.log(`Server is listening on port ${port}`);
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