let counterValue = 0

const value = document.querySelector("#value")

const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')

const addValue = () => {
	counterValue += 1
	value.textContent = counterValue
}

const removeValue = () => {
	counterValue -= 1
	value.textContent = counterValue
}

decrement.addEventListener("click", removeValue)
increment.addEventListener("click", addValue)
