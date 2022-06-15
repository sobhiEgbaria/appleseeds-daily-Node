//1.0 ===> making http server
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("gogo lolo ");
//   res.write("you");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("server is lesten in port 3000");
// });

// 2.0 ===> making http request for weather app

const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=2ffbd6a8aabd6006d001a3909f3db77f&query=37.8267,-122.4233&";
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("internet connection falls ");
  } else {
    console.log(
      `${response.body.current.weather_descriptions[0]}.\nthe temperature is ${response.body.current.temperature} and it feels like ${response.body.current.feelslike}`
    );
  }
});
