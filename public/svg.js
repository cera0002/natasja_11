document.addEventListener("DOMContentLoaded", function () {
  runProgram("java");
});

async function runProgram() {
  let selected;
  let selectedID;
  let color;
  let active;
  let infoboks;

  // 1. Fetch the SVG file
  let mySvg = await fetch("/natasja_kort_ny.svg");
  let svg = await mySvg.text();

  document.querySelector("#map").innerHTML = svg;

  // 2. Find info box and hide them

  let info_1 = document.querySelector("#map #info-1");
  let info_2 = document.querySelector("#map #info-2");
  let info_3 = document.querySelector("#map #info-3");
  let info_4 = document.querySelector("#map #info-4");

  info_1.style.visibility = "hidden";
  info_2.style.visibility = "hidden";
  info_3.style.visibility = "hidden";
  info_4.style.visibility = "hidden";

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
    console.log(color);

    // show inforboxes
    if (selectedID === "punkt1") {
      info_1.style.visibility = "visible";
      infoboks = info_1;
    }

    if (selectedID === "punkt2") {
      info_2.style.visibility = "visible";
      infoboks = info_2;
    }

    if (selectedID === "punkt3") {
      info_3.style.visibility = "visible";
      infoboks = info_3;
    }

    if (selectedID === "punkt4") {
      info_4.style.visibility = "visible";
      infoboks = info_4;
    }

    // 4. if previously clicked element exists, change its color back to original
    if (active) {
      active.setAttribute("fill", "#b62300");
    }
    active = selected;
    console.log(active);
    // make the clicked element active

    // change the color of the clicked element
    if (color === "#b62300") {
      document.querySelector("#" + selectedID).setAttribute("fill", "#b48234");
    }

    // reset colors and hide info boxes if the element is clicked again
    else {
      document.querySelector("#" + selectedID).setAttribute("fill", "#b62300");
      infoboks.style.visibility = "hidden";
    }
  }
}
