const body = document.querySelector('body');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
// const actives = document.querySelectorAll('.active');
let currentActive = 0;
const seasonArr = [
	"url('images/winter.jpg')",
	"url('images/winter.jpg')",
	"url('images/spring.jpg')",
	"url('images/summer.jpg')",
	"url('images/fall.jpg')",
];
body.style.backgroundImage = seasonArr[currentActive];
next.addEventListener('click', () => {
	currentActive == 0 ? (currentActive += 2) : ++currentActive;
	if (currentActive > circles.length) {
		currentActive = circles.length;
	}
	console.log('current active: ', currentActive);
	body.style.backgroundImage = seasonArr[currentActive];
	update();
});
prev.addEventListener('click', () => {
	currentActive--;
	if (currentActive < 1) {
		currentActive = 1;
	}
	body.style.backgroundImage = seasonArr[currentActive];
	update();
});
function update() {
	circles.forEach((circle, idx) => {
		if (idx < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});
	const actives = document.querySelectorAll('.active');
	console.log('actives: ', actives.length);
	console.log('circles length: ', circles.length);
	console.log('actives / circles: ', actives.length / circles.length);
	progress.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + '%';
	if (currentActive === 1) {
		prev.disabled = true;
	} else if (currentActive === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}