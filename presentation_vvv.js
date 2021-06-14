function on() {
  document.getElementById("theme").classList.add("light_dark");
  document.getElementById("image").classList.add("no_invert");
  document.getElementById("image2").classList.add("no_invert");
  document.getElementById("image4").classList.add("no_invert");
  document.getElementById("image5").classList.add("no_invert");
}

function off() {
  document.getElementById("theme").classList.remove("light_dark");
  document.getElementById("image").classList.remove("no_invert");
  document.getElementById("image2").classList.remove("no_invert");
  document.getElementById("image4").classList.remove("no_invert");
  document.getElementById("image5").classList.remove("no_invert");
}
