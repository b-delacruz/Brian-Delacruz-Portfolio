/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/

const aboutBtn = document.querySelector("#about-me")
const nftBtn = document.querySelector("#nft-collection")
const workBtn = document.querySelector("#my-work")
const contact = document.querySelector("#contact")
const homeBtn = document.querySelector("#home-page")

const favicon = document.querySelector("#favicon")
const bugBtn = document.getElementById("bug")
console.log(favicon)
/*----------------------------- Event Listeners -----------------------------*/
bugBtn.addEventListener("click", handleEvent)

/*-------------------------------- Functions --------------------------------*/

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