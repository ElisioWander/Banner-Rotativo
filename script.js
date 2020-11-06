let time = 3000
    currentImageIndex = 0
    images = document.querySelectorAll("#slider img")
    max = images.length


function nextImage() {
    //remove class selected to start again
    images[currentImageIndex].classList.remove("selected")

    //adding image
    currentImageIndex++
    
    if(currentImageIndex >= max) {
        currentImageIndex = 0
    }

    //add class to next image
    images[currentImageIndex].classList.add("selected")

    console.log(currentImageIndex)

}

function start() {
    setInterval(() => {
        //change image
        nextImage()
    }, time)
}

window.addEventListener("load", start)