const catigories = document.querySelector('#categories')
console.log(`В списке ${catigories.children.length} категории.`)

for (const child of catigories.children) {
  console.log(`Категория: ${child.firstElementChild.innerHTML}`)
  console.log(`Количество элементов: ${child.lastElementChild.children.length}`)
}
