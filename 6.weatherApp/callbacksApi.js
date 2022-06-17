// const request = require("request");
// const weatherStack = (address, callback) => {
//   const url =
//     "http://api.weatherstack.com/current?access_key=2ffbd6a8aabd6006d001a3909f3db77f&query=37.8267,-122.4233";
//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("internet connection falls ");
//     } else {
//       callback(
//         `${response.body.current.weather_descriptions[0]}.the temperature is ${response.body.current.temperature} and it feels like ${response.body.current.feelslike}`
//       );
//     }
//   });
// };

// module.exports = weatherStack;

// the same code with destructuring
import request from "request";
export const weatherStack = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=2ffbd6a8aabd6006d001a3909f3db77f&query=37.8267,-122.4233";
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("internet connection falls ");
    } else {
      callback(
        `${body.current.weather_descriptions[0]}: temperature:${body.current.temperature} feels like:${body.current.feelslike}`
      );
    }
  });
};

// weatherStack("lolo", (res) => {
//   console.log(res);
// });
