function updateTime() {
  //LAX
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let laLocalTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = laLocalTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = laLocalTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //TKY
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tkLocalTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tkLocalTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tkLocalTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //SGP
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let sgLocalTime = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = sgLocalTime.format("MMMM Do YYYY");
  singaporeTimeElement.innerHTML = sgLocalTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

//dropdown select
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
          </div>
          <a href="/">All cities</a>
      `;
}

//update time call
updateTime();
setInterval(updateTime, 1000);

//update city call
let citiesSelect = document.querySelector("#city-select");
citiesSelect.addEventListener("change", updateCity);
