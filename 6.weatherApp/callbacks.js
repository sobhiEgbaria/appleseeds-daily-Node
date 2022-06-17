// 2.0 ===> making http request for weather app with a call backs
import { weatherStack } from "./callbacksApi.js";
// the output is wrong!!!!!!

weatherStack("lolo", (res) => {
  console.log(res);
});
