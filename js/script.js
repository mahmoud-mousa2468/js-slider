var imagesList = Array.from(document.querySelectorAll(".row img"))
var popUpDiv = document.querySelector(".popUp")
var xMark = document.querySelector(".close")
var left = document.querySelector(".left")
var right = document.querySelector(".right")
var imageIndex;
var wideImage = document.querySelector(".imgSlider")
for (let i = 0; i < imagesList.length; i++) {
    imagesList[i].addEventListener("click", function (e) {
        imageIndex = imagesList.indexOf(e.target)
        const currentSrc = e.target.getAttribute("src")
        popUpDiv.classList.replace("d-none", "d-flex")
        wideImage.style.backgroundImage = `url(${currentSrc})`
    })
}
document.addEventListener("keyup",function(e){
    if(e.key=="ArrowRight"){
        slide(1)
    }else if(e.key=="ArrowLeft"){
        slide(-1)
    }else if(e.key=="Escape"){
        close()
    }
})
left.addEventListener("click", function () {
    slide(-1)
})
right.addEventListener("click", function () {
    slide(1)
})
xMark.addEventListener("click", function () {
        close()
    })
function slide(step) {
    imageIndex = imageIndex + step
    if (imageIndex < 0) {
        imageIndex = imagesList.length - 1
    } else if (imageIndex > imagesList.length - 1) {
        imageIndex = 0
    }
    const nextScr = imagesList[imageIndex].getAttribute("src")
    wideImage.style.backgroundImage = `url(${nextScr})`
}
function close() {
        popUpDiv.classList.replace("d-flex", "d-none")
}

