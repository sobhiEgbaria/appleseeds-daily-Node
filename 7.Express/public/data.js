console.log("gogo lolo js");

const weatherButton = document.querySelector("form");
const p = document.querySelector(".res");

weatherButton.addEventListener("submit", (e) => {
  e.preventDefault();
  const apiWeather = "http://localhost:3000/weather?address=um%20al%20fahem";
  fetch(apiWeather).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
        p.textContent = `${data.location} ... ${data.forecast}`;
      }
    });
  });
});
