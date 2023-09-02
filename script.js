window.onload = function () {
	const menuBtn = document.querySelector(".hamburger");
	const mobileMenu = document.querySelector(".mobile-nav");
	const links = document.querySelectorAll(".mobile-links");
	const cutePhrases = [
		"Ouch, that hurt! (Only joking).",
		"Hello, you found an easter egg! You're amazing!",
		"Keep moving forward, you're doing amazing!",
		"Enjoy your day today.",
		"Hello!",
		"Did you do something today that made you happy?",
		"Exercise should be fun! Enjoy it!",
		"Surprise! Did this make you smile? Contact me and we can work together!",
	];
	const numCutePhrases = cutePhrases.length;

	menuBtn.addEventListener("click", function () {
		menuBtn.classList.toggle("is-active");
		mobileMenu.classList.toggle("is-active");
	});

	links.forEach((link) => {
		link.addEventListener("click", function () {
			menuBtn.classList.toggle("is-active");
			mobileMenu.classList.toggle("is-active");
			const rand = Math.floor(Math.random() * (numCutePhrases - 1));
			console.log(cutePhrases[rand]);
		});
	});
};
