const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

const ingredientsEl = []

ingredients.map((ingrEl) => {
  const itemLi = document.createElement('li')
  itemLi.textContent = ingrEl

  ingredientsEl.push(itemLi)
})

const listIngredients = document.querySelector('#ingredients')

listIngredients.prepend(...ingredientsEl)
