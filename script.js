// Put the image that we catch on onclick and put in .starbucksImg src
function imgSlider(img) {
    document.querySelector('.starbucksImg').src = img;
};

function changeCircleColor(imgColor) {
    const circle = document.querySelector('.circle');
    circle.style.background = imgColor;
}

