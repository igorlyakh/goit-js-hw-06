const ul = document.querySelector("#categories")
const li = document.querySelectorAll(".item")

console.log(`Number of categories: ${ul.children.length}`)

li.forEach(item => {
	console.log(`Category: ${item.firstElementChild.textContent}`)
	console.log(`Elements: ${item.lastElementChild.children.length}`)
})
