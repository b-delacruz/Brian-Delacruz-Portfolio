

const submitBtn = document.querySelector('#submit')
const nameInput = document.querySelector('#name')
const numberInput = document.querySelector('#number')

console.log(submitBtn)

init()

submitBtn.addEventListener('submit',function(evt){
  evt.preventDefault()
  submitBtn.submit();

})


function getData (){
  let newName = nameInput.textContent
  nameInput.innerHTML = newName

  console.log(newName)
}

function init(){
  nameInput.textContent = 'hello'
}

console.log(nameInput.textContent)