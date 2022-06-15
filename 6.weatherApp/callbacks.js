// 2.0 ===> making http request for weather app with a call backs
const weatherStack = require("./callbacksApi");
// the output is wrong!!!!!!
weatherStack("lolo", (res) => {
  console.log(res);
});
