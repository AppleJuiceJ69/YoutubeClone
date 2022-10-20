const left = document.querySelector(".left");
const right = document.querySelector(".right");
const leftContent = document.querySelector(".left-Content");
const filterButton = document.querySelector(".section-Content");
const filterContent = document.querySelector(".filter-Content");

const openIt = () => {
	leftContent.style.display = "block";
	if (true) {
		left.addEventListener("click", closeIt);
		console.log("opened");
	}
};
const closeIt = () => {
	leftContent.style.display = "none";
	if (true) {
		left.addEventListener("click", openIt);
		console.log("closed");
	}
};

const leftClosed = left.addEventListener("click", closeIt);
leftClosed;

//Opening filter with button on Search.html.

const openFilter = () => {
	filterContent.style.display = "block";
	console.log("hello");
};

filterButton.addEventListener("click", openFilter);
