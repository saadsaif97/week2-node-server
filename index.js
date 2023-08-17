const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  
  let hey = queryObject.hey
  let answer = 0
  try {
    answer = sumTillNumber(parseInt(hey)) 
  } catch (error) {
      // set response header
    res.writeHead(200, {"Content-Type": "text/plain"});

    // return query params as json object in response
    return res.end(`${error}`);
  }
  
  // set response header
  res.writeHead(200, {"Content-Type": "text/plain"});

  // return query params as json object in response
  return res.end(`${answer}`);
});

server.listen(3000,()=> {
    console.log("Server listening on port 3000");
});


function sumTillNumber(n) {
  n = parseInt(n)
  console.log(n, n == NaN)
  if (isNaN(n)) throw new Error('Please enter a valid number')
  let answer = 0
  for (let i = 1; i <= n; i++) {
    answer+=i
  }
  return answer
}