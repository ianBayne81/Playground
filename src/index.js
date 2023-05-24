// create header element
const createHeader = document.createElement('h1')
createHeader.textContent = "Read all about it!"
const selectHeader = document.querySelector("#header")
selectHeader.appendChild(createHeader)

//create time and insert into header element
const getDate = moment().format('MMMM Do YYYY, h:mm:ss a') // moment.js link from html page
const createTime = document.createElement('p')
createTime.textContent = getDate
selectHeader.appendChild(createTime)

//create button / link element
const createButton = document.createElement('button')
createButton.textContent = ''
const selectButtonElement = document.querySelector('#div-two')
selectButtonElement.appendChild(createButton)
createButton.setAttribute('id', 'jsButton')

document.querySelector('#jsButton').addEventListener('click', function (e) {
    e.preventDefault()
    location.assign('https://news.com.au')
   });






