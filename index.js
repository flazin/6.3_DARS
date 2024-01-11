const inputSelection = document.querySelector("#mission")
const remove = document.querySelector("#remove")
const list = document.querySelector(".list")
const darkMode = document.querySelector("#mode")
const itensNumber = document.querySelector('#itens-number')
const listLength = document.getElementsByClassName('flex-container')


const body = document.querySelector('body')
const pList = document.getElementsByClassName('plist')
const checklist = document.getElementsByClassName('checklist')
const todo = document.querySelector('.todo')
const action = document.querySelector('.action')
const mobileDiv = document.querySelector('.options-mobile')



function turnDark(){

  body.classList.add('dark-mode-body')
  inputSelection.classList.add('dark-mode-mission')
  todo.classList.add('dark-mode-todo')
  action.classList.add('dark-mode-action')
  mobileDiv.classList.add('options-mobile-dark')

  if(pList.length > 0){
    for(let i = 0; i < pList.length; i++){
      pList[i].classList.add('p-dark')
      pList[i].classList.remove('p-light')
    }
  }

  if(checklist.length > 0){
    for(let i = 0; i < checklist.length; i++){
      checklist[i].classList.add('dark-mode-noChecked')
      checklist[i].classList.remove('noChecked')
    }
  }

}

function turnLight(){
  body.classList.remove('dark-mode-body')
  inputSelection.classList.remove('dark-mode-mission')
  todo.classList.remove('dark-mode-todo')
  action.classList.remove('dark-mode-action')
  mobileDiv.classList.remove('options-mobile-dark')


  if(pList.length > 0){
    for(let i = 0; i < pList.length; i++){
      pList[i].classList.remove('p-dark')
      pList[i].classList.add('p-light')
    }
  }

  if(checklist.length > 0){
    for(let i = 0; i < checklist.length; i++){
      checklist[i].classList.remove('dark-mode-noChecked')
      checklist[i].classList.add('noChecked')
    }
  }
  

  
}

function deleteItem(e){
  e.remove()

  listLength.length = 0 ? itensNumber.innerHTML = '0 itens left' : itensNumber.innerHTML = `${listLength.length} itens left`
}

function markCheck(e){
  if(e.classList.contains('noChecked')){
      e.classList.remove("noChecked")
      e.classList.add("checked")
    }else{
      e.classList.add("noChecked")
      e.classList.remove("checked")
    }
}


darkMode.addEventListener("click", function(){

  let src = darkMode.getAttribute('src')
  let newsrc = (src === 'images/icon-moon.svg') ? 'images/icon-sun.svg' : 'images/icon-moon.svg'
  
  darkMode.src = newsrc

  newsrc === 'images/icon-sun.svg' ? turnDark() : turnLight()

})



  
  






inputSelection.addEventListener("keypress", function(event){
  if (event.key === "Enter" && inputSelection.value != ''){

    // First, create a div (flex-container)
    const flexContainer = document.createElement('div')

    flexContainer.classList.add("flex-container")

    // Set flex-container div inside 'list' div
    list.appendChild(flexContainer)

    // second, crete anothe div (left)
    const left = document.createElement('div')
    left.classList.add("left")

    // set left div inside flex-container div
    flexContainer.appendChild(left)

    let src = darkMode.getAttribute('src')

    // third, create a img (checklist)
    const checkImg = document.createElement('img')

    checkImg.classList.add('checklist')

    src === 'images/icon-moon.svg' ? 
    checkImg.classList.add('noChecked') : 
    checkImg.classList.add('dark-mode-noChecked')
  
    checkImg.onclick = () => markCheck(checkImg)
    checkImg.setAttribute('id','check')
    checkImg.setAttribute('src',"images/icon-check.svg")

    // eventListenner for line-through on iten

    // checkImg.addEventListener('click', function(){
    //   if(checkImg.classList.contains('checked')){
    //     paragraphLeft.classList.add('p-through')
    //   }else{
    //     paragraphLeft.classList.remove('p-through')
    //   }
    // })

    checkImg.addEventListener('click', () =>{
      checkImg.classList.contains('checked') ?
      paragraphLeft.classList.add('p-through') :
      paragraphLeft.classList.remove('p-through')
    })

    // set checklist img inside left div
    left.appendChild(checkImg)

    // fourth, create a p (paragraphLeft/plist)
    const paragraphLeft = document.createElement('p')

    paragraphLeft.innerText = inputSelection.value

    paragraphLeft.classList.add('plist')

    src === 'images/icon-moon.svg' ? 
    paragraphLeft.classList.add('p-light') : 
    paragraphLeft.classList.add('p-dark')

    // set paragraphLeft/plist inside left div
    left.appendChild(paragraphLeft)

    //fifth, create anothe div (right)
    const right = document.createElement('div')
    right.classList.add("right")

    // set right div inside flex container div
    flexContainer.appendChild(right)

    //sixth, create a img (img class='cross' id='remove')
    const removeImg = document.createElement('img')
    removeImg.classList.add("cross")
    removeImg.setAttribute('id', 'remove')
    removeImg.onclick = () => deleteItem(flexContainer)
    removeImg.setAttribute('src', "images/icon-cross.svg")

    // set remove img inside right div
    right.appendChild(removeImg)


    // get list Length to set itensNumber dynamically
    const itens = listLength.length
    itensNumber.innerHTML = `${itens} itens left`

    //set input value to empty
    inputSelection.value = ''

    
    
  }
})




