// const wrap_button = {
//   sub: document.querySelector("[data-action='increment']"),
//   add: document.querySelector("[data-action='decrement']"),
//   span: document.querySelector('#value'),
//   wrapper: document.querySelector('#counter '),
// }
// let counterValue = 0
// const increment = () => {
//   counterValue += 1

//   document.getElementById('value').textContent = counterValue
// }

// const decrement = () => {
//   counterValue -= 1

//   document.getElementById('value').textContent = counterValue
// }
// wrap_button.sub.addEventListener('click', increment)
// wrap_button.add.addEventListener('click', decrement)
// ==============================================
const buttonDec = document.querySelector("[data-action='decrement']")
const buttonInc = document.querySelector("[data-action='increment']")
const value = document.getElementById('value')

let counterValue = 0

buttonDec.addEventListener('click', decrement)
buttonInc.addEventListener('click', increment)

function decrement() {
  counterValue--
  value.textContent = counterValue
}
function increment() {
  counterValue++
  value.textContent = counterValue
}
