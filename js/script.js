var imagesList = Array.from(document.querySelectorAll(".row img")) // array of all images
var popUpDiv = document.querySelector(".popUp")
var xMark = document.querySelector(".close")
var left = document.querySelector(".left")
var right = document.querySelector(".right")
var imageIndex;//variable to put clicked image index in
var wideImage = document.querySelector(".imgSlider")
var imagesContent=document.querySelector(".imagesContent")

imagesContent.addEventListener("click",function(e){
    if(e.target.tagName=="IMG"){
        imageIndex = imagesList.indexOf(e.target)
        const currentSrc = e.target.getAttribute("src")
        popUpDiv.classList.replace("d-none", "d-flex")
        wideImage.style.backgroundImage = `url(${currentSrc})`
    }
})

// for loop to show the slider if any image click and show it in the slide and put clicked image index in variable imageIndex
// for (let i = 0; i < imagesList.length; i++) {
//     imagesList[i].addEventListener("click", function (e) {
//         imageIndex = imagesList.indexOf(e.target)
//         const currentSrc = e.target.getAttribute("src")
//         popUpDiv.classList.replace("d-none", "d-flex")
//         wideImage.style.backgroundImage = `url(${currentSrc})`
//     })
// }


// to close the slider if i clicked the popUpDiv
document.addEventListener("click", function (e) {
    if (e.target == popUpDiv) {
        close()
    }
})
// one event to handle if i click arrow right, arrow left or esc
document.addEventListener("keyup", function (e) {
    if (e.key == "ArrowRight") {
        slide(1)
    } else if (e.key == "ArrowLeft") {
        slide(-1)
    } else if (e.key == "Escape") {
        close()
    }
})
// event to handle if i click left arrow icon
left.addEventListener("click", function () {
    slide(-1)
})
// event to handle if i click right arrow icon
right.addEventListener("click", function () {
    slide(1)
})
// event to handle if i click close arrow icon
xMark.addEventListener("click", function () {
    close()
})
// fun to has the logic of prev or next based on parameter step if -1 then prev
// if 1 then next
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
// fun to has logic of close icon
function close() {
    popUpDiv.classList.replace("d-flex", "d-none")
}

