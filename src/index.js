//GSAP code for plugin
gsap.registerPlugin(Flip)

//create time and insert into header element
const getDate = moment().format('LLL') // moment.js link from html page
const createTime = document.createElement('p')
createTime.textContent = getDate
const selectHeader = document.querySelector('#header')
selectHeader.appendChild(createTime)

//create button / link element
const createButton = document.createElement('button')
createButton.textContent = ''
const selectButtonElement = document.querySelector('#button-element')
selectButtonElement.appendChild(createButton)
createButton.setAttribute('id', 'jsButton')

document.querySelector('#jsButton').addEventListener('click', function (e) {
    e.preventDefault()
    location.assign('https://news.com.au')
   });

//code for moving letters with flip on page load

const targetLetterI = document.querySelector('#i')
const targetLetterA = document.querySelector('#a')
const targetLetterN = document.querySelector('#n')
window.onload = function () {
    let letterI = Flip.getState('#i')
    let letterA = Flip.getState('#a')
    let letterN = Flip.getState('#n')
    selectHeader.appendChild(targetLetterI)
    selectHeader.appendChild(targetLetterA)
    selectHeader.appendChild(targetLetterN)
    Flip.from(letterI, {duration: 3, ease: "power1.out"})
    Flip.from(letterA, {duration: 4, ease: "power1.out"})
    Flip.from(letterN, {duration: 5, ease:"power1.out"})
}

//code for moving box and button with flip when page is clicked
const container = document.querySelector('#container')
const box = document.querySelector('#box')

document.addEventListener('click', (e) => {
    let boxState = Flip.getState('#box')
    let buttonState = Flip.getState('#jsButton')
    container.appendChild(box)
    box.appendChild(selectButtonElement)
    Flip.from(boxState, { duration: 3, ease: "power1.out"})
    Flip.from(buttonState, { duration: 5, ease: "power1.out"})
})




