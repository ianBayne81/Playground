// create header element
const createHeader = document.createElement('h1')
createHeader.textContent = "Read all about it!"
const selectHeader = document.querySelector("#header")
selectHeader.appendChild(createHeader)

//create button / link element
const createButton = document.createElement('button')
createButton.textContent = ''
const selectButtonElement = document.querySelector('#div-three')
selectButtonElement.appendChild(createButton)
createButton.setAttribute('id', 'jsButton')

document.querySelector('#jsButton').addEventListener('click', function (e) {
    e.preventDefault()
    location.assign('https://news.com.au')
   });



