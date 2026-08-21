let min = 0;
let max = 101;
let gaet = 50;

let start = document.getElementById("start");
let lav = document.getElementById("lav");
let rigtigt = document.getElementById("rigtigt");
let hoej = document.getElementById("hoej");
let tekst = document.getElementById("gaet");

start.onclick = function () {
  min = 0;
  max = 101;
  gaet = 50;

  tekst.innerHTML = gaet;

  start.disabled = true;
  lav.disabled = false;
  rigtigt.disabled = false;
  hoej.disabled = false;
};

lav.onclick = function () {
  min = gaet;
  gaet = Math.floor((min + max) / 2);

  tekst.innerHTML = gaet;
};

hoej.onclick = function () {
  max = gaet;
  gaet = Math.floor((min + max) / 2);

  tekst.innerHTML = gaet;
};

rigtigt.onclick = function () {
  tekst.innerHTML = "YAY ";

  lav.disabled = true;
  rigtigt.disabled = true;
  hoej.disabled = true;
  start.disabled = false;
};
