const closeBtn = document.querySelector(".close-btn");
const aboutme = document.querySelector(".aboutme");

aboutme.addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("hidden");
  document.querySelector(".popup").classList.remove("hidden");
  document.querySelector(".popup").classList.add("flex");

});

closeBtn.addEventListener("click", () => {
  document.querySelector(".overlay").classList.add("hidden");
  document.querySelector(".popup").classList.add("hidden");
});

// document.querySelector(".sidebar").classList.add("blur-sm");
// document.querySelector(".navbar").classList.add("blur-sm");
// document.querySelector(".sidebar").classList.add("blur-sm");
// document.querySelector(".bigLogo").classList.add("blur-sm");




