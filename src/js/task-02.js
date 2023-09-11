const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
]

const list = document.querySelector("#ingredients")

// const li = document.createElement("li")

ingredients.forEach(item => {
	const li = document.createElement("li")
	li.textContent = item
	li.setAttribute("class", "item")
	list.append(li)
})
