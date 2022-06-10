
const favicon = document.querySelector("#favicon")
const bugBtn = document.getElementById("bug")
const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")

bugBtn.addEventListener("click", handleEvent)
lightDarkBtn.addEventListener("click", toggleLightDark)



let bugFavicon = false

checkDarkPref()

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

function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}

function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}
