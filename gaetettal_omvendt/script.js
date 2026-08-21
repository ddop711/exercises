let min = 0;
let max = 101;
let gaet = 50;
let forsog = 0;

let start = document.getElementById("start");
let lav = document.getElementById("lav");
let rigtigt = document.getElementById("rigtigt");
let hoej = document.getElementById("hoej");
let tekst = document.getElementById("gaet");
let besked = document.getElementById("besked");

start.onclick = function () {
  min = 0;
  max = 101;
  gaet = 50;
  forsog = 1;

  tekst.innerHTML = gaet;
  besked.innerHTML = "Forsøg: " + forsog;

  start.disabled = true;
  lav.disabled = false;
  rigtigt.disabled = false;
  hoej.disabled = false;
};

lav.onclick = function () {
  min = gaet;
  gaet = Math.floor((min + max) / 2);
  forsog++;

  tekst.innerHTML = gaet;
  besked.innerHTML = "Forsøg: " + forsog;
};

hoej.onclick = function () {
  max = gaet;
  gaet = Math.floor((min + max) / 2);
  forsog++;

  tekst.innerHTML = gaet;
  besked.innerHTML = "Forsøg: " + forsog;
};

rigtigt.onclick = function () {
  tekst.innerHTML = "YAY!";
  besked.innerHTML = "Jeg brugte " + forsog + " forsøg.";

  lav.disabled = true;
  rigtigt.disabled = true;
  hoej.disabled = true;
  start.disabled = false;
};
