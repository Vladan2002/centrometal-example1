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
    console.log(a);
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



function progress(value){
    console.log("value",value);
    let div=document.getElementById("progress");
    div.style.width=`${value}%`;

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

    // Hide all tab content
    tabContent = document.getElementsByClassName("main__table__content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("main__table--active"); // Hide all tabs
    }

    // Remove active state from all buttons
    tabButtons = document.getElementsByClassName("main__table__tabs__button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("main__table__tabs--active");
    }

    // Show the selected tab
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


$(document).ready(function () {
    var $slider = $("#slider2").bxSlider({
        pager: false,        // Disable bxSlider's pager
        controls: true,      // Show prev/next controls
        infiniteLoop: true,  // Enable infinite loop
        touchEnabled: true,  // Enable touch swiping
        auto: true,          // Enable auto-sliding
        pause: 3000,         // Slide duration in milliseconds
        minSlides: 1,        // Minimum number of logos visible
        maxSlides: 5,        // Maximum number of logos visible
        slideWidth: 230,     // Control logo size without stretching
        moveSlides: 1,       // Move one slide at a time
        autoHover: true,     // Pause on hover
        shrinkItems: false,  // Prevent bxSlider from resizing images
        responsive: true
    });
});




$(document).ready(function(){
    var slider = $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        controls: false, // Isključuje default strelice bxSlider-a
        auto: false, // Automatska promena slika
        pause: 3000,
        adaptiveHeight: true
    });

    $('#prev-slide').click(function(){
        slider.goToPrevSlide();
    });

    $('#next-slide').click(function(){
        slider.goToNextSlide();
    });

    $('.main__left__product__slider__link').on('click', function(){
        $('.main__left__product__slider__link').removeClass('main__left__product__slider__link--active');
        $(this).addClass('main__left__product__slider__link--active');
    });
});




$(document).ready(function() {
    console.log("Document is ready!");

    var $slider = $("#slider1").bxSlider({
        pager: false,  // Disable bxSlider's default pager
        controls: false, // Enable prev/next controls
        infiniteLoop: false, // Infinite loop enabled
        touchEnabled: false, // Enable touch swiping
        auto: false, // Disable auto-sliding
    });

    console.log("BX Slider initialized:", $slider);

    var totalSlides = $(".slider .container__products__slide-show__slide").length;
    var customPager = $('.container__products__slide-show__custom-pager');

    console.log("Total slides:", totalSlides);

    if (totalSlides > 0) {
        let progressValue=100/totalSlides;
        document.getElementById("progress").style.width = progressValue + "%";
        for (var i = 0; i < totalSlides; i++) {

            customPager.append('<li class="pager-item" onclick="progress(' + progressValue + ')">' + (i + 1) + '</li>');
            progressValue+=100/totalSlides;

        }


        $('.pager-item').eq(0).addClass('active-page');

        $(document).on('click', '.pager-item', function() {
            var index = $(this).index();

            $slider.goToSlide(index);

            $('.pager-item').removeClass('active-page');
            console.log("Active page removed from all pager items");

            $(this).addClass('active-page');
            console.log("Active page class added to pager item at index:", index);
        });

        $slider.on('onSlideAfter', function(event, slick, currentSlide) {
            console.log("onSlideAfter triggered. Current slide index:", currentSlide);

            $('.pager-item').removeClass('active-page');
            console.log("Active page removed from all pager items");

            $('.pager-item').eq(currentSlide).addClass('active-page');
            console.log("Active page class added to pager item at index:", currentSlide);
        });
    } else {
        console.log("No slides found!");
    }
});
