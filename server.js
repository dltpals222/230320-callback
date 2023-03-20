import http from 'http'

console.dir(http)


//response는 객체가 된다.
const server = http.createServer(function(request, response){
  //우리가 만들어야 되는 것
  let body = "";
  body += "<!DOCTYPE html>"
  body += "<html>"
  body += "<head>"
  body += "<title>Node.js</title>"
  body += "</head>"
  body += "<body>"
  body += "<h1>Hello World</h1>"
  body += "</body>"
  body += "</html>"
  
  //양식에 맞춰줘야되는 것
  response.statusCode = 200 ;
  response.setHeader('Content-Type','text/html');
  response.end("Hello World");
});