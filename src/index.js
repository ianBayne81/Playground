//create time and date and insert into header element
const getDate = moment().format('LLL') // moment.js link from html page
const createTime = document.createElement('p')
createTime.textContent = getDate
const selectHeader = document.querySelector('#get-date')
selectHeader.appendChild(createTime)


//Select DOM buttons for calculator
const selectScreen = document.querySelector(".display")
const selectClearButton = document.querySelector('#clear')
const selectBackspaceButton = document.querySelector("#backspace")
const selectEqualsButton = document.querySelector("#equals")
const selectDecimalButton = document.querySelector("#decimal")
const selectMinusButton = document.querySelector("#minus")
const selectDivideButton = document.querySelector("#divide")
const selectAddButton = document.querySelector("#plus")
const selectMultiplyButton= document.querySelector("#multiply")
const selectDoubleZero = document.querySelector("#double-zero")
const selectButtonZero = document.querySelector("#zero")
const selectButtonOne = document.querySelector("#one")
const selectButtonTwo = document.querySelector("#two")
const selectButtonThree = document.querySelector("#three")
const selectButtonFour = document.querySelector("#four")
const selectButtonFive = document.querySelector("#five")
const selectButtonSix = document.querySelector("#six")
const selectButtonSeven = document.querySelector("#seven")
const selectButtonEight = document.querySelector("#eight")
const selectButtonNine = document.querySelector("#nine")

//Render the string to screen limiting the amount of characters to 13

const render = () => { 
    
    if (selectScreen.value.length > 13) {
        selectScreen.value = selectScreen.value.toString().slice(0, -1)
    }

    const createPara = document.createElement('p')
    createPara.textContent = selectScreen.value
    selectScreen.appendChild(createPara)
}

//Eventlisteners for buttons
selectClearButton.addEventListener("click",(e) => {
    selectScreen.value = ''
})

selectBackspaceButton.addEventListener("click", (e) => {
    selectScreen.value = selectScreen.value.toString().slice(0, -1)
    render()
})

selectDecimalButton.addEventListener("click", (e) => {
    selectScreen.value += '.'
    render()
})

selectDoubleZero.addEventListener("click", (e) => {
    selectScreen.value += '00'
    render()
})

selectButtonZero.addEventListener("click", (e) => {
    selectScreen.value += '0'
    render()
})

selectButtonOne.addEventListener("click",(e) => {
    selectScreen.value += '1'
    render()
})

selectButtonTwo.addEventListener("click",(e) => {
    selectScreen.value += '2'
    render()
})

selectButtonThree.addEventListener("click",(e) => {
    selectScreen.value += '3'
    render()
})

selectButtonFour.addEventListener("click",(e) => {
    selectScreen.value += '4'
    render()
})

selectButtonFive.addEventListener("click",(e) => {
    selectScreen.value += '5'
    render()
})

selectButtonSix.addEventListener("click",(e) => {
    selectScreen.value += '6'
    render()
})

selectButtonSeven.addEventListener("click",(e) => {
    selectScreen.value += '7'
    render()
})

selectButtonEight.addEventListener("click",(e) => {
    selectScreen.value += '8'
    render()
})

selectButtonNine.addEventListener("click",(e) => {
    selectScreen.value += '9'
    render()
})

selectAddButton.addEventListener("click", (e) => {
    selectScreen.value += '+'
    render()
})

selectMinusButton.addEventListener("click", (e) => {
    selectScreen.value += '-'
    render()
})

selectMultiplyButton.addEventListener("click", (e) => {
    selectScreen.value += '*'
    render()
})

selectDivideButton.addEventListener("click", (e) => {
    selectScreen.value += '/'
    render()
})

selectEqualsButton.addEventListener("click", (e) => {
    if (selectScreen.value.includes('.')) {
        selectScreen.value = eval(selectScreen.value).toFixed(2)
    } else {
        selectScreen.value = eval(selectScreen.value)
    }
    render()
})






