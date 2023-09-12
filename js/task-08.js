const form = document.querySelector(".login-form")

form.addEventListener("submit", e => {
	e.preventDefault()

	const email = form.elements.email
	const password = form.elements.password

	if (email.value === "" || password.value === "") {
		alert("All fields must be filled in")
	} else {
		const data = {
			email: email.value,
			password: password.value,
		}
		console.log(data)
		form.reset()
	}
})
