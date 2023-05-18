const createParagraph = document.createElement('p')
createParagraph.textContent = 'Inserted through Javascript!'

const selectElement = document.querySelector('#div-three')
selectElement.appendChild(createParagraph)