//create time and date and insert into header element
const getDate = moment().format('LLL') // moment.js link from html page
const createTime = document.createElement('p')
createTime.textContent = getDate
const selectHeader = document.querySelector('#get-date')
selectHeader.appendChild(createTime)

//ensure values entered into input are numberic only
//

//Select DOM buttons for calculator
const selectScreen = document.querySelector('#screen')
const selectClearButton = document.querySelector('#clear')
const selectBackspaceButton = document.querySelector("#backspace")
const selectEqualsButton = document.querySelector("#equals")
const selectDecimalButton = document.querySelector("#decimal")
const selectMinusButton = document.querySelector("#subtract")
const selectDivideButton = document.querySelector("#divide")
const selectAddButton = document.querySelector("#addition")
const selectMultiplyButton= document.querySelector("#multiply")
const selectButtonZero = document.querySelector("#num-zero")
const selectButtonOne = document.querySelector("#num-one")
const selectButtonTwo = document.querySelector("#num-two")
const selectButtonThree = document.querySelector("#num-three")
const selectButtonFour = document.querySelector("#num-four")
const selectButtonFive = document.querySelector("#num-five")
const selectButtonSix = document.querySelector("#num-six")
const selectButtonSeven = document.querySelector("#num-seven")
const selectButtonEight = document.querySelector("#num-eight")
const selectButtonNine = document.querySelector("#num-nine")



//create array 
const newArray = []

//newArray.concat joins two arrays

//functions created are to be transfered over to functions file and imported/exported into main js file
const renderArray = () => {
    if (newArray.length > 12) {
        newArray.length = 12;
    }
    selectScreen.innerHTML = newArray.join(" ")
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

selectMinusButton.addEventListener("click", (e) => {
    newArray.push('-')
    renderArray()
})

selectMultiplyButton.addEventListener("click", (e) => {
    newArray.push('x')
    renderArray()
})

selectDivideButton.addEventListener("click", (e) => {
    newArray.push('/')
    renderArray()
})

selectEqualsButton.addEventListener("click", (e) => {
    newArray.push('=')
    renderArray()
})

selectDecimalButton.addEventListener("click", (e) => {
    newArray.push('.')
    renderArray()
})

selectButtonZero.addEventListener("click", (e) => {
    newArray.push(0)
    renderArray()
})

selectButtonOne.addEventListener("click",(e) => {
    newArray.push(1)
    renderArray()
})

selectButtonTwo.addEventListener("click",(e) => {
    newArray.push(2)
    renderArray()
})

selectButtonThree.addEventListener("click",(e) => {
    newArray.push(3)
    renderArray()
})

selectButtonFour.addEventListener("click",(e) => {
    newArray.push(4)
    renderArray()
})

selectButtonFive.addEventListener("click",(e) => {
    newArray.push(5)
    renderArray()
})

selectButtonSix.addEventListener("click",(e) => {
    newArray.push(6)
    renderArray()
})

selectButtonSeven.addEventListener("click",(e) => {
    newArray.push(7)
    renderArray()
})

selectButtonEight.addEventListener("click",(e) => {
    newArray.push(8)
    renderArray()
})

selectButtonNine.addEventListener("click",(e) => {
    newArray.push(9)
    renderArray()
})








