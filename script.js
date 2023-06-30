// eae js

const buttonAdquireOne = document.querySelector('#ebookOne')
const buttonAdquireTwo = document.querySelector('#ebookTwo')

function onclick(){
  const instagram = "https://instagram.com/raphitos_"
  window.open(instagram, '_blank')
}

buttonAdquireOne.addEventListener('click', onclick)
buttonAdquireTwo.addEventListener('click', onclick)