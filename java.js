const heaer = document.querySelector("header");

window.addEventListener("scroll", function () {
  Headers.classlist.toggle("sticky", this.window.scrollY > 0);
});
