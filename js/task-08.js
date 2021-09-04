const renderBtn = document.querySelector('[data-action="render"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')
const boxes = document.querySelector('#boxes')

renderBtn.addEventListener('click', getAmout)
destroyBtn.addEventListener('click', destroyBoxes)

function getAmout() {
  const amount = document.querySelector('#controls input').value
  createBoxes(amount)
}

function createBoxes(amount) {
  const basicSize = 30
  const fragment = document.createDocumentFragment()
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10
    const margin = basicSize - 10
    const div = document.createElement('div')
    div.style.cssText = `width: ${size}px; margin-top:${margin}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`
    fragment.appendChild(div)
  }
  boxes.appendChild(fragment)
}

function destroyBoxes() {
  boxes.innerHTML = ''
}
function random() {
  return Math.floor(Math.random() * 250)
}
