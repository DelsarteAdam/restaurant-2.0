function ongletChange(x) {
  let onglet = document.querySelectorAll(".inData");
  let active = document
    .querySelector(".btnSelection")
    .querySelectorAll("button");
  console.log(active);
  for (let i = 0; i < onglet.length; i++) {
    onglet[i].style.display = "none";
    active[i].removeAttribute("id", "btnActif");
  }

  onglet[x].style.display = "block";
  active[x].setAttribute("id", "btnActif");
}
