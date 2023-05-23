
const createButton = document.createElement('button')
createButton.textContent = ''
const selectButtonElement = document.querySelector('#div-three')
selectButtonElement.appendChild(createButton)
createButton.setAttribute('id', 'jsButton')

document.querySelector('#jsButton').addEventListener('click', function (e) {
    e.preventDefault()
    location.assign('https://news.com.au')
   });



