import { myWork } from "./my-work.js"

const cardContainer = document.getElementById('card-container')


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
  
  cardContainer.innerHTML = myProject