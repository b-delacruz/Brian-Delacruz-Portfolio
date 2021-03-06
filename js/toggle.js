const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")

lightDarkBtn.addEventListener("click", toggleLightDark)

checkDarkPref()

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