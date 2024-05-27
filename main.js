
const closeInfoTop = document.querySelector('.ndinfoTopImg')

const infoTop = document.querySelector('.infoTop')

closeInfoTop.addEventListener("click", function() {
  infoTop.style.display = "none"
})

const navResponsiveBtn = document.querySelector('#menu')

const onClickNavResponsiveBtn = document.querySelector('.onClickNavResponsiveBtn')
const closeNav = document.querySelector('#closeNav')
let close = 0

navResponsiveBtn.addEventListener("click", function() {
  if (close === 0) {
  onClickNavResponsiveBtn.style.display = "block"
  closeNav.style.display = "block"
  navResponsiveBtn.style.display = "none"
  close = 1
  }
})

closeNav.addEventListener("click", function() {
  if (close === 1) {
    onClickNavResponsiveBtn.style.display = "none"
    closeNav.style.display = "none"
    navResponsiveBtn.style.display = "block"
    close = 0
  }
})


