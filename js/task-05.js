const inputElement = document.querySelector('input#name-input')

const nameElement = document.querySelector('span#name-output')

inputElement.addEventListener('input', (event) => {
  if (event.currentTarget.value) {
    nameElement.textContent = event.currentTarget.value
  } else {
    nameElement.textContent = 'незнакомец'
  }
})
