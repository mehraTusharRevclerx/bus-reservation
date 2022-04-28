"use strict";
// user will come and click on the seats he want
// the user will click on the button like disabled male or female
// if the user click or disabled all the selected seats will be assign to disabled person
// check box button will get changed to the selected button
// the after clicking the button the selected checkbox will get disabled
// at the end the result will be show in the website how much seats are booked by disabled perosn and how much by male and female also show how much seats are left empty.

// var x = document.getElementById("myCheck").checked;
// document.getElementById("demo").innerHTML = x;
const disableArr = new Array();
const maleArr = new Array();
const femaleArr = new Array();
const allSeats = document.querySelectorAll("input[type='checkbox']");
function mainFun(e) {
  allSeats.forEach((seat) => {
    if (seat.checked && e.target.id === "disabledBtn") {
      seat.style.backgroundColor = "#dc3545";
      seat.setAttribute("disabled", "true");
      seat.classList.add("contentNone");
      disableArr.push(seat.value);
      seat.checked = false;
    }
    if (seat.checked && e.target.id === "maleBtn") {
      seat.style.backgroundColor = "#ffc107";
      seat.classList.add("contentNone");
      seat.setAttribute("disabled", "true");
      maleArr.push(seat.value);
      seat.checked = false;
      console.log("male");
    }
    if (seat.checked && e.target.id === "femaleBtn") {
      seat.style.backgroundColor = "#0dcaf0";
      seat.classList.add("contentNone");
      femaleArr.push(seat.value);
      seat.checked = false;
      seat.setAttribute("disabled", "true");
      console.log("female");
    }
    if (seat.hasAttribute("disabled")) {
      seat.classList.add("cursor");
    }
  });
}

document.querySelector("#disabledBtn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  mainFun(e);
  busSeatInfoFun();
});
document.querySelector("#maleBtn").addEventListener("click", (e) => {
  e.preventDefault();
  mainFun(e);
  busSeatInfoFun();
});
document.querySelector("#femaleBtn").addEventListener("click", (e) => {
  e.preventDefault();
  mainFun(e);
  busSeatInfoFun();
});
function busSeatInfoFun() {
  document.querySelector(".busSeatInfo").style.display = "block";

  document.querySelector(
    "#totalSeatInfo"
  ).innerHTML = `Total Seats: ${allSeats.length}`;
  document.querySelector(
    "#disabledInfo"
  ).innerHTML = `Disabled Seats: ${disableArr.length}`;
  document.querySelector(
    "#maleInfo"
  ).innerHTML = `Male Seats: ${maleArr.length}`;
  document.querySelector(
    "#femaleInfo"
  ).innerHTML = `Female Seats: ${femaleArr.length}`;
  // document.querySelector("#emptyInfo");
}
