export const BASE_URL =
  process.env.React_App_DEV_MODE === 'development' ? 'http://localhost:5050' : 'https://weather-app-appleseeds.herokuapp.com';

console.log(BASE_URL)