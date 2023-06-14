

//create time and insert into header element
const getDate = moment().format('LLL') // moment.js link from html page
const createTime = document.createElement('p')
createTime.textContent = getDate
const selectHeader = document.querySelector('#get-date')
selectHeader.appendChild(createTime)





