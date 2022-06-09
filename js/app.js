/*-------------------------------- Constants --------------------------------*/
import { myWork } from "./my-work.js"

let project = {
    title:'Tic Tac Toe',
    deployment:'https://ttt-delacruz-games.netlify.app/',
    image:'/assets/mywork/ttt.png',
    github:'https://github.com/b-delacruz/ttt-weekend',
    description:'A tic tac toe game',
}

let myProject = myWork.map(project =>
`
<div class="card" style="width: 18rem;">
  <img src="${project.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">${project.description}</p>
    <a href="${project.github}" class="git-btn">GitHub</a>
    <a href="${project.deployment}" class="deploy-btn">Deploy</a>
  </div>
</div>
`
).join('')


console.log(myProject)
/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/
const cardContainer = document.getElementById('card-container')
cardContainer.innerHTML = myProject

const favicon = document.querySelector("#favicon")
const bugBtn = document.getElementById("bug")
// /*----------------------------- Event Listeners -----------------------------*/
bugBtn.addEventListener('click', handleEvent)

// /*-------------------------------- Functions --------------------------------*/

let bugFavicon = false

function handleEvent(){
  bugFavicon = !bugFavicon
  changeFavicon()
  console.log(bugFavicon)
}


function changeFavicon() {
bugFavicon
  ? favicon.setAttribute('href', "/assets/images/bug.jpg") : favicon.setAttribute('href', "/assets/images/fix.jpg")
  console.log(bugFavicon)
}
