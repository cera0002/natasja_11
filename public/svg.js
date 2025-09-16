document.addEventListener("DOMContentLoaded", function () {
  runProgram();
});

async function runProgram() {
  let selected;
  let selectedID;

  let active;
  let infoboks;

  // 1. Fetch the SVG file
  let mySvg = await fetch("natasja_finished.svg");
  let svg = await mySvg.text();

  document.querySelector("#map").innerHTML = svg;

  // 2. Find info box and hide them

  let info_1 = document.querySelector("#map #info-1");
  let info_2 = document.querySelector("#map #info-2");
  let info_3 = document.querySelector("#map #info-3");
  let info_4 = document.querySelector("#map #info-4");
  let info_5 = document.querySelector("#map #info-5");
  let info_6 = document.querySelector("#map #info-6");
  let info_7 = document.querySelector("#map #info-7");
  let info_8 = document.querySelector("#map #info-8");

  info_1.style.visibility = "hidden";
  info_2.style.visibility = "hidden";
  info_3.style.visibility = "hidden";
  info_4.style.visibility = "hidden";
  info_5.style.visibility = "hidden";
  info_6.style.visibility = "hidden";
  info_7.style.visibility = "hidden";
  info_8.style.visibility = "hidden";

  // 3. color change on click and show info boxes

  document
    .querySelector("#map #points")
    .addEventListener("click", function (evt) {
      clicked(evt);
    });

  // click function
  function clicked(obj) {
    if (infoboks) {
      infoboks.style.visibility = "hidden";
    }
    console.log(obj.target);

    // find the clicked element
    selected = obj.target;

    //find the clicked elements id
    selectedID = selected.getAttribute("id");

    // find the clicked elements fill color
    color = selected.getAttribute("fill");

    // show inforboxes
    if (selectedID === "punkt1-2") {
      info_1.style.visibility = "visible";
      infoboks = info_1;
    }

    if (selectedID === "punkt2-2") {
      info_2.style.visibility = "visible";
      infoboks = info_2;
    }

    if (selectedID === "punkt3-2") {
      info_3.style.visibility = "visible";
      infoboks = info_3;
    }

    if (selectedID === "punkt4-2") {
      info_4.style.visibility = "visible";
      infoboks = info_4;
    }

    if (selectedID === "punkt5-2") {
      info_5.style.visibility = "visible";
      infoboks = info_5;
    }

    if (selectedID === "punkt6-2") {
      info_6.style.visibility = "visible";
      infoboks = info_6;
    }

    if (selectedID === "punkt7-2") {
      info_7.style.visibility = "visible";
      infoboks = info_7;
    }

    if (selectedID === "punkt8-2") {
      info_8.style.visibility = "visible";
      infoboks = info_8;
    }
    // 4. if previously clicked element exists, change its color back to original
    if (active) {
      active.setAttribute("fill", "#ecc800");
    }
    active = selected;
    // make the clicked element active

    // change the color of the clicked element
    if (color === "#ecc800") {
      document.querySelector("#" + selectedID).setAttribute("fill", "#ff0000");
    }

    // reset colors and hide info boxes if the element is clicked again
    else {
      document.querySelector("#" + selectedID).setAttribute("fill", "#ecc800");
      infoboks.style.visibility = "hidden";
    }
  }
}
