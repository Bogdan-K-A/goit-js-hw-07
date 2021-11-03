const input = document.querySelector('#validation-input')

// const changeColorInput = () => {
//   let valueLength = input.value.length
//   const valueDataAtribute = Number(input.getAttribute('data-length'))

//   if (valueDataAtribute === valueLength) {
//     return validBorderColor()
//   }
//   return invalidBorderColor()
// }

// function validBorderColor() {
//   input.classList.remove('invalid')
//   input.classList.add('valid')
// }

// function invalidBorderColor() {
//   input.classList.remove('valid')
//   input.classList.add('invalid')
// }

input.addEventListener('change', changeColorInput)
// ===========================================
function changeColorInput() {
  let valueLength = input.value.length
  let valueLengthData = input.getAttribute('data-length')

  valueLength >= valueLengthData ? changeValid() : changeInvalid()
}

function changeValid() {
  input.classList.remove('invalid')
  input.classList.add('valid')
}
function changeInvalid() {
  input.classList.remove('valid')
  input.classList.add('invalid')
}
