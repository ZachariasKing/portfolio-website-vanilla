// Set onClick events
document.getElementById("about-nav-link").onclick = function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("about-heading").scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
};
document.getElementById("projects-nav-link").onclick = function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("projects-scroll-loc").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
document.getElementById("home-nav-link").onclick = function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("home-scroll-loc").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

