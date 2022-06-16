import https from "https";
import axios from "axios";

//***********with request and options:***********

// const options = {
//   hostname: "cat-fact.herokuapp.com",
//   port: 443,
//   path: "/facts",
//   method: "GET",
// };
// const req = https.request(options, (res) => {
//   let data = "";
//   res.on("data", (chunk) => {
//     data += chunk;
//   });

//   res.on("end", () => {

//     console.log(JSON.parse(data));
//   });
// });

// req.on("error", (error) => {
//   console.error(error);
// });

// req.end();

//***********another way- with only get:***********

// https
//   .get("https://cat-fact.herokuapp.com/facts", (response) => {
//     let data = "";
//     response.on("data", (chunk) => {
//       data += chunk;
//     });

//     response.on("end", () => {
//       console.log(JSON.parse(data));
//     });
//   })
//   .on("error", (error) => {
//     console.log(error);
//   });

// ==> axios

axios
  .get("https://cat-fact.herokuapp.com/facts")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

//==> request method
const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=2ffbd6a8aabd6006d001a3909f3db77f&query=37.8267,-122.4233&units=f";
request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]}. the temperature is ${response.body.current.temperature} and it feels like ${response.body.current.feelslike}`
  );
});
