// This file is made to handle the working of the given functions like slides in index.html


function outline(x = 1) {
    let searchBox = document.getElementsByClassName('searchBox')[0];
    if (x == 1)
        searchBox.style.outline = `1px solid black`;
    else
        searchBox.style.outline = ``;
}

// This is to find weather the click is inside the search box element or not to give an outline to it
// Currently it is only calling a function but we can do things like add a class to it when it is clicked and remove that class when it unclicks
document.addEventListener("click", function (evt) {
    let flyoutEl = document.getElementsByClassName('searchBox')[0],
        targetEl = evt.target; // clicked element      
    do {
        if (targetEl == flyoutEl) {
            outline(1);
            return;
        }

        targetEl = targetEl.parentNode;
    } while (targetEl);

    outline(0);
});

// document.addEventListener("DOMContentLoaded", function(){
//     outline(1);
// });

// let slideBtn = document.getElementsByClassName('slide-btn');
// let productContainer = document.getElementById('productSlider');
// let curTop = parseInt(window.getComputedStyle(productContainer).getPropertyValue('top'));

// let curTop = (productContainer.offsetHeight)/2;

// console.log(curTop);

// slideBtn[0].style.top = `calc(${curTop}px - 2rem)`;
// slideBtn[1].style.top = `calc(${curTop}px - 2rem)`;

let slides = document.getElementsByClassName('card');
for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `${i * 100}%`;
}



let curSlide = 0;
function right() {
    if (curSlide + 8 >= slides.length) {
        document.getElementsByClassName('right-product-slide')[0].style.display = 'none';
        curSlide++;
    } else {
        document.getElementsByClassName('left-product-slide')[0].style.display = 'inline-block';
        curSlide += 2;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${curSlide * 100}%)`;
    }
}

function left() {
    if (curSlide == 1) {
        document.getElementsByClassName('left-product-slide')[0].style.display = 'none';
        curSlide--;
    } else if (curSlide <= 2) {
        document.getElementsByClassName('left-product-slide')[0].style.display = 'none';
        curSlide -= 2;
    } else {
        document.getElementsByClassName('right-product-slide')[0].style.display = 'inline-block';
        curSlide -= 2;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${curSlide * 100}%)`;
    }

}