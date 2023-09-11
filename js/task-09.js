function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`
}

const widget = document.querySelector(".widget")
const color = document.querySelector(".color")
const changeBtn = document.querySelector(".change-color")

changeBtn.addEventListener("click", () => {
	const randomColor = getRandomHexColor()
	widget.style.backgroundColor = randomColor
	color.textContent = randomColor
})
