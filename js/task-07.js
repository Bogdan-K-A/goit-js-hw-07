// const input = document.getElementById('font-size-control')
// const span = document.getElementById('text')

// input.addEventListener('input', inputRange)

// function inputRange(event) {
//   span.style.fontSize = event.currentTarget.value + 'px'
// }
// ===============================

const input = document.getElementById('font-size-control')
const text = document.getElementById('text')

input.addEventListener('input', sizeEl)

function sizeEl() {
  let size = input.value
  text.style.fontSize = size + 'px'
}
