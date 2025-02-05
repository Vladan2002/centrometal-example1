function categories() {
    let buttons = document.querySelectorAll("#menu button");
    let control=0;
    if(buttons[1].classList.contains("deactivate-button")) {
        control=1;
    }

    for (let i = 1; i < buttons.length; i++) {
        if (control ===1) {
            if(buttons[i].hasAttribute("data-category")) {continue;}
            buttons[i].classList.remove("deactivate-button");
        } else {
            buttons[i].classList.add("deactivate-button");
        }
    }
}
function navbar(element) {
    let a = document.querySelectorAll("#select-menu a");
    console.log(a);
    for (let i = 0; i < a.length; i++) {
        if (a[i].classList.contains("active")) {
            a[i].classList.remove("active");
        }
    }
    element.classList.add("active");

}
function toggleSubcategories(category) {
    const subcategories = document.querySelectorAll(`.button__subcategory[data-category="${category}"]`);

    subcategories.forEach(sub => {
    sub.classList.toggle('deactivate-button');
});
}



function progress(value){
    console.log("value",value);
    let div=document.getElementById("progress");
    div.style.width=`${value}%`;

}