const http = require("http")

const server = http.createServer((req, res) => {
  
  const data = {
    data: `hello-world`,
    hostname: require("os").hostname(),
    test: 'test'
  }

  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(JSON.stringify(data))
})

server.listen(process.env.PORT, err => {
  if (err) return console.log(err)

  console.log(`API is running @ http://localhost:${process.env.PORT}`)
})
