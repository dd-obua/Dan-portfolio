const nav = document.querySelector("nav");
const mobileIcons = document.querySelector(".mobile-icons");
const logo = document.querySelector(".logo");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const options = document.querySelector(".options");
const portfolio = document.querySelector(".portfolio");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");

closeIcon.style.display = "none";
options.style.display = "none";

mobileIcons.addEventListener("click", () => {
	if (nav.classList.contains("click-mobile-icon")) {
		nav.classList.remove("click-mobile-icon");
		closeIcon.style.display = "none";
		hamburger.style.display = "block";
		logo.style.display = "block";
		options.style.display = "none";
	} else {
		nav.classList.add("click-mobile-icon");
		closeIcon.style.display = "block";
		hamburger.style.display = "none";
		logo.style.display = "none";
		options.style.display = "block";
	}
});
