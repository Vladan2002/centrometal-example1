function categories() {
    let buttons = document.querySelectorAll("#menu button");
    let control=0;
    if(buttons[1].classList.contains("container__side__menu__button--deactivate-button")) {
        control=1;
    }

    for (let i = 1; i < buttons.length; i++) {
        if (control ===1) {
            if(buttons[i].hasAttribute("data-category")) {continue;}
            buttons[i].classList.remove("container__side__menu__button--deactivate-button");
        } else {
            buttons[i].classList.add("container__side__menu__button--deactivate-button");
        }
    }
}
function navbar(element) {
    let a = document.querySelectorAll("#select-menu a");
    for (let i = 0; i < a.length; i++) {
        if (a[i].classList.contains("navbar__small__select__button--active")) {
            a[i].classList.remove("navbar__small__select__button--active");
        }
    }
    element.classList.add("navbar__small__select__button--active");

}
function toggleSubcategories(category) {
    const subcategories = document.querySelectorAll(`.container__side__menu__button--subcategory[data-category="${category}"]`);

    subcategories.forEach(sub => {
    sub.classList.toggle('container__side__menu__button--deactivate-button');
});
}




function toggleMenu() {
    var menu = document.getElementById("select-menu");
    menu.classList.toggle("navbar__small__select--active");
}




function increaseQuantity() {
    let input = document.getElementById("quantity");
    let value = parseInt(input.value, 10);
    value = isNaN(value) ? 1 : value + 1;
    input.value = value.toString().padStart(2);
}

function decreaseQuantity() {
    let input = document.getElementById("quantity");
    let value = parseInt(input.value, 10);
    if (value > 1) {
        value--;
    }
    input.value = value.toString().padStart(2);
}


function openTab(event, tabName) {
    var i, tabContent, tabButtons;

    tabContent = document.getElementsByClassName("main__table__content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("main__table--active");
    }

    tabButtons = document.getElementsByClassName("main__table__tabs__button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("main__table__tabs--active");
    }

    document.getElementById(tabName).classList.add("main__table--active");
    event.currentTarget.classList.add("main__table__tabs--active");
}



function rateStar(rating) {
    let stars = document.querySelectorAll(".fa-star");
    for (let i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].classList.add("main__table__checked");
        } else {
            stars[i].classList.remove("main__table__checked");
        }
    }
    document.getElementById("rating-value").textContent = rating;
}






if(window.location.pathname.includes("/product-page.html")) {
    var link=document.getElementsByClassName("main__left__product__slider__link");


    var slideTwo=0;
    var slideImages=document.querySelectorAll(".main__left__product__slider img")
    var slider2pager=document.getElementById("bx-pager");
    pagerProductTwo();



}else{
    var images = document.querySelectorAll(".container__products__slider__show img");
    pagerIndex();
    var page=document.getElementsByClassName("container__products__slider__pager__text");
    var number = images.length;
    var slide = 1;
    var progress=100/number;
    var bar=document.getElementById("progress");


    var ad=document.getElementById("popup-container");
    var ads=document.getElementById("popup");


    setInterval(plusSlide,3000)

    setInterval(showAds,30000)


}







function pagerIndex() {
    var pager = document.getElementById("pager");
    var number = images.length;
    var content = '';

    for (var i = 0; i < number; i++) {
        content += "<p class='container__products__slider__pager__text'  onclick='links(" + (i + 1) + ")'>" + (i + 1) + "</p>";
    }

    pager.innerHTML = content;
}


function slider(prev=false) {
    if (prev) {
        if (slide === number) {
            images[0].classList.remove("container__products__slider__show__img--active");
            page[0].classList.remove("container__products__slider__pager__text--active");
        } else {
            images[slide].classList.remove("container__products__slider__show__img--active");
            page[slide].classList.remove("container__products__slider__pager__text--active");
        }
    } else {
        if (slide > 1) {
            images[slide - 2].classList.remove("container__products__slider__show__img--active");
            page[slide - 2].classList.remove("container__products__slider__pager__text--active");
        } else {
            images[number - 1].classList.remove("container__products__slider__show__img--active");
            page[number - 1].classList.remove("container__products__slider__pager__text--active");
        }
    }
    images[slide-1].classList.add("container__products__slider__show__img--active");
    page[slide-1].classList.add("container__products__slider__pager__text--active");
    bar.style.width = slide*progress + "%";

}
function plusSlide() {
    slide = (slide % number) + 1;
    slider();
}


function minusSlide() {
    if (slide > 1) {
        slide--;
    } else {
        slide = number;
    }
    slider(true);
}

function links(num) {

    images[slide-1].classList.remove("container__products__slider__show__img--active");
    page[slide-1].classList.remove( "container__products__slider__pager__text--active");
    images[num-1].classList.add("container__products__slider__show__img--active");
    page[num-1].classList.add("container__products__slider__pager__text--active");
    bar.style.width = num*progress + "%";
    slide=num;

}






var slideBrands = document.getElementById("slider22-container");
var brands = Array.from(document.querySelectorAll(".slider-brand img"));



function updateSliders() {
    slideBrands.innerHTML = "";
    brands.forEach(img => slideBrands.appendChild(img));
}

function switchesSlide() {

    slideBrands.style.transition = "transform 0.5s ease-in-out";
    slideBrands.style.transform = "translateX(-400px)";

    setTimeout(() => {
        brands.push(brands.shift());
        updateSliders();

        slideBrands.style.transition = "none";
        slideBrands.style.transform = "translateX(-200px)";

    }, 500);

}

function switchSlide() {

    slideBrands.style.transition = "transform 0.5s ease-in-out";
    slideBrands.style.transform = "translateX(400px)";

    setTimeout(() => {
        brands.unshift(brands.pop());
        updateSliders();

        slideBrands.style.transition = "none";
        slideBrands.style.transform = "translateX(200px)";

    }, 800);
}


function showAds(){
    var number=Math.floor(Math.random()*2);
    if(number===0){
        ad.innerHTML="";
        ad.innerHTML='<img class="container__side__ad__img" src="src/assets/cipele.jpg" alt="">\n' +
            '        <p class="container__side__ad__text">Fashion cipele</p>\n' +
            '        <p class="container__side__ad__text">Veneno</p>\n' +
            '        <button class="overlay__close" onclick="closePopup()">Zatvori</button>';
    }
    else{
        ad.innerHTML="";
        ad.innerHTML= '<img class="container__side__ad__img" src="src/assets/rostilj.jpg" alt="">\n' +
            '        <p class="container__side__ad__text">Fashion cipele</p>\n' +
            '        <p class="container__side__ad__text">Veneno</p>\n' +
            '        <button class="overlay__close" onclick="closePopup()">Zatvori</button>';
    }

    ads.style.display='flex';
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}



function pagerProductTwo() {
    for (let i = 0; i < slideImages.length; i++) {
        var a = document.createElement("a");
        a.href = "#";
        a.classList.add("main__left__product__slider__link");
        if(i===0){a.classList.add("main__left__product__slider__link--active");
        }
        a.onclick = (function (index) {
            return function () {
                pagerProduct(index);
            };
        })(i);

        var imgClone = slideImages[i].cloneNode(true);
        a.appendChild(imgClone);
        slider2pager.appendChild(a);
    }
}


function upSlider() {


    slideTwo++;

    if(slideTwo === slideImages.length) {
        link[slideImages.length-1].classList.remove("main__left__product__slider__link--active");
        slideTwo=0;
        link[slideTwo].classList.add("main__left__product__slider__link--active");

    }else{
        link[slideTwo].classList.add("main__left__product__slider__link--active");
        if(slideTwo>=1){link[slideTwo-1].classList.remove("main__left__product__slider__link--active");}


    }

    let offset = -slideTwo * 100;
    document.getElementById('voli-vas-voli').style.transform = `translateX(${offset}%)`;



}
function downSlider() {
    slideTwo--;

    if (slideTwo === -1) {
        link[0].classList.remove("main__left__product__slider__link--active");
        slideTwo = slideImages.length - 1;
        link[slideTwo].classList.add("main__left__product__slider__link--active");
    } else {
        link[slideTwo].classList.add("main__left__product__slider__link--active");
        if (slideTwo < slideImages.length - 1) {
            link[slideTwo + 1].classList.remove("main__left__product__slider__link--active");
        }
    }

    let offset = -slideTwo * 100;
    document.getElementById('voli-vas-voli').style.transform = `translateX(${offset}%)`;
}


var previous=0;
function pagerProduct(input){

    if(previous!==-2){
        link[previous].classList.remove("main__left__product__slider__link--active");
    }
    link[input].classList.add("main__left__product__slider__link--active");
    previous=input;

    slideTwo=input-1;
    upSlider()

}


setInterval(switchSlide, 2000);


