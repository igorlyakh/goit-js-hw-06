const userName = document.querySelector("#name-output")
const input = document.querySelector("#name-input")

userName.textContent = "Anonymous"

input.addEventListener("input", e => {
	if (e.target.value.length === 0) {
		userName.textContent = "Anonymous"
	} else {
		userName.textContent = e.target.value
	}
})
