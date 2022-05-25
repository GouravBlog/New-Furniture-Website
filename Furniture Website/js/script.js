setInterval(() => {
  let date = document.getElementById("date");
  let d = new Date();
  date.innerHTML = d.toLocaleString();
}, 1000);

function openMenu() {
  document.querySelector("ul").style.left = "0px";
  console.log("hemburger click");
}

function closeMenu() {
  document.querySelector("ul").style.left = "-255px";
}
