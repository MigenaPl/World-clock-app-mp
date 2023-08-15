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
}
updateTime();
setInterval(updateTime, 1000);

//
