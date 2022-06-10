
const favicon = document.querySelector("#favicon")
const bugBtn = document.getElementById("bug")


bugBtn.addEventListener("click", handleEvent)


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
