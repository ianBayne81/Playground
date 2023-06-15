//create time and date and insert into header element
const getDate = moment().format('LLL') // moment.js link from html page
const createTime = document.createElement('p')
createTime.textContent = getDate
const selectHeader = document.querySelector('#get-date')
selectHeader.appendChild(createTime)

//ensure values entered into input are numberic only
//

//Select DOMS
const selectScreen = document.querySelector('#input-screen')
const selectClearButton = document.querySelector('#clear')
const selectBackspaceButton = document.querySelector("#backspace")
const selectAddButton = document.querySelector("#addition")
const selectButtonZero = document.querySelector("#num-zero")
const selectButtonOne = document.querySelector("#num-one")
const selectButtonTwo = document.querySelector("#num-two")
const selectButtonThree = document.querySelector("#num-three")

//create array and render array
const newArray = []

//newArray.concat joins two arrays

//functions created are to be transfered over to functions file and imported/exported into main js file
const renderArray = () => {
    selectScreen.value = newArray
}

//Eventlisteners for buttons
selectClearButton.addEventListener("click",(e) => {
    newArray.length = 0
    renderArray()
})

selectBackspaceButton.addEventListener("click", (e) => {
    newArray.pop()
    renderArray()
})

selectAddButton.addEventListener("click", (e) => {
    newArray.push('+')
    renderArray()
})

selectButtonZero.addEventListener("click", (e) => {
    newArray.push(0)
    selectScreen.value = newArray
})

selectButtonOne.addEventListener("click",(e) => {
    newArray.push(1)
    selectScreen.value = newArray
})

selectButtonTwo.addEventListener("click",(e) => {
    newArray.push(2)
    selectScreen.value = newArray
})

selectButtonThree.addEventListener("click",(e) => {
    
})









