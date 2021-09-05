const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

let ingredientsEl = ingredients.map((ingrEl) => {
  const itemLi = document.createElement('li')
  itemLi.textContent = ingrEl
  return itemLi
})

const listIngredients = document.querySelector('#ingredients')

listIngredients.prepend(...ingredientsEl)
