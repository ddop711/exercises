const moms = 0.25;
const btn = document.querySelector("#beregn");

btn.addEventListener("click", function () {
  let beloeb = document.querySelector("#beloeb").value;
  document.querySelector("#resultat").innerHTML = beregnMoms(beloeb);
  console.log(beregnMoms(beloeb));
});

function beregnMoms(beloeb) {
  return beloeb * moms;
}
