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

const page2No1 = document.querySelector("#moreInfoinPage2No1")

const page2No2 = document.querySelector("#moreInfoinPage2No2")

const page2No3 = document.querySelector("#moreInfoinPage2No3")

const page2No4 = document.querySelector("#moreInfoinPage2No4")

const page2No5 = document.querySelector("#moreInfoinPage2No5")

const btnPage2No1 = document.querySelector(".infoBtnPage2no1")

const btnPage2No2 = document.querySelector(".infoBtnPage2no2")

const btnPage2No3 = document.querySelector(".infoBtnPage2no3")

const btnPage2No4 = document.querySelector(".infoBtnPage2no4")

const btnPage2No5 = document.querySelector(".infoBtnPage2no5")

const btnBottomPage2No1 = document.querySelector("#btnPage2No1")
const btnBottomPage2No2 = document.querySelector("#btnPage2No2")
const btnBottomPage2No3 = document.querySelector("#btnPage2No3")
const btnBottomPage2No4 = document.querySelector("#btnPage2No4")
const btnBottomPage2No5 = document.querySelector("#btnPage2No5")

btnPage2No1.addEventListener("click", function() {
  page2No1.style.display = "flex"
  page2No2.style.display = "none"
  page2No3.style.display = "none"
  page2No4.style.display = "none"
  page2No5.style.display = "none"
  btnPage2No2.style.background = "#F5F3F3"
  btnPage2No2.style.border = "0.5px solid #000"
  btnPage2No3.style.background = "#F5F3F3"
  btnPage2No3.style.border = "0.5px solid #000"
  btnPage2No4.style.background = "#F5F3F3"
  btnPage2No4.style.border = "0.5px solid #000"
  btnPage2No5.style.background = "#F5F3F3"
  btnPage2No5.style.border = "0.5px solid #000"
  btnPage2No2.style.background = "#F5F3F3"
  btnPage2No2.style.border = "0.5px solid #000"
  btnPage2No1.style.background = "#FBDDE0"
  btnPage2No1.style.border = "none"
  btnBottomPage2No1.style.display = "flex"
  btnBottomPage2No2.style.display = "none"
  btnBottomPage2No3.style.display = "none"
  btnBottomPage2No4.style.display = "none"
  btnBottomPage2No5.style.display = "none"
})


btnPage2No2.addEventListener("click", function() {
  page2No1.style.display = "none"
  page2No2.style.display = "flex"
  page2No3.style.display = "none"
  page2No4.style.display = "none"
  page2No5.style.display = "none"
  btnPage2No1.style.background = "#F5F3F3"
  btnPage2No1.style.border = "0.5px solid #000"
  btnPage2No3.style.background = "#F5F3F3"
  btnPage2No3.style.border = "0.5px solid #000"
  btnPage2No4.style.background = "#F5F3F3"
  btnPage2No4.style.border = "0.5px solid #000"
  btnPage2No5.style.background = "#F5F3F3"
  btnPage2No5.style.border = "0.5px solid #000"
  btnPage2No1.style.background = "#F5F3F3"
  btnPage2No1.style.border = "0.5px solid #000"
  btnPage2No2.style.background = "#FBDDE0"
  btnPage2No2.style.border = "none"
  btnBottomPage2No1.style.display = "none"
btnBottomPage2No2.style.display = "flex"
btnBottomPage2No3.style.display = "none"
btnBottomPage2No4.style.display = "none"
btnBottomPage2No5.style.display = "none"
})

btnPage2No3.addEventListener("click", function() {
  page2No1.style.display = "none"
  page2No2.style.display = "none"
  page2No3.style.display = "flex"
  page2No4.style.display = "none"
  page2No5.style.display = "none"
  btnPage2No1.style.background = "#F5F3F3"
  btnPage2No1.style.border = "0.5px solid #000"
  btnPage2No2.style.background = "#F5F3F3"
  btnPage2No2.style.border = "0.5px solid #000"
  btnPage2No4.style.background = "#F5F3F3"
  btnPage2No4.style.border = "0.5px solid #000"
  btnPage2No5.style.background = "#F5F3F3"
  btnPage2No5.style.border = "0.5px solid #000"
  btnPage2No2.style.background = "#F5F3F3"
  btnPage2No2.style.border = "0.5px solid #000"
  btnPage2No3.style.background = "#FBDDE0"
  btnPage2No3.style.border = "none"
  btnBottomPage2No1.style.display = "none"
btnBottomPage2No2.style.display = "none"
btnBottomPage2No3.style.display = "flex"
btnBottomPage2No4.style.display = "none"
btnBottomPage2No5.style.display = "none"
})

btnPage2No4.addEventListener("click", function() {
  page2No1.style.display = "none"
  page2No2.style.display = "none"
  page2No3.style.display = "none"
  page2No4.style.display = "flex"
  page2No5.style.display = "none"
  btnPage2No1.style.background = "#F5F3F3"
  btnPage2No1.style.border = "0.5px solid #000"
  btnPage2No2.style.background = "#F5F3F3"
  btnPage2No2.style.border = "0.5px solid #000"
  btnPage2No3.style.background = "#F5F3F3"
  btnPage2No3.style.border = "0.5px solid #000"
  btnPage2No5.style.background = "#F5F3F3"
  btnPage2No5.style.border = "0.5px solid #000"
  btnPage2No3.style.background = "#F5F3F3"
  btnPage2No3.style.border = "0.5px solid #000"
  btnPage2No4.style.background = "#FBDDE0"
  btnPage2No4.style.border = "none"
  btnBottomPage2No1.style.display = "none"
btnBottomPage2No2.style.display = "none"
btnBottomPage2No3.style.display = "none"
btnBottomPage2No4.style.display = "flex"
btnBottomPage2No5.style.display = "none"
})

btnPage2No5.addEventListener("click", function() {
  page2No1.style.display = "none"
  page2No2.style.display = "none"
  page2No3.style.display = "none"
  page2No4.style.display = "none"
  page2No5.style.display = "flex"
  btnPage2No1.style.background = "#F5F3F3"
  btnPage2No1.style.border = "0.5px solid #000"
  btnPage2No2.style.background = "#F5F3F3"
  btnPage2No2.style.border = "0.5px solid #000"
  btnPage2No3.style.background = "#F5F3F3"
  btnPage2No3.style.border = "0.5px solid #000"
  btnPage2No4.style.background = "#F5F3F3"
  btnPage2No4.style.border = "0.5px solid #000"
  btnPage2No5.style.background = "#FBDDE0"
  btnPage2No5.style.border = "none"
  btnBottomPage2No1.style.display = "none"
btnBottomPage2No2.style.display = "none"
btnBottomPage2No3.style.display = "none"
btnBottomPage2No4.style.display = "none"
btnBottomPage2No5.style.display = "flex"
})