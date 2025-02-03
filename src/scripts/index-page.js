function categories() {
    let buttons = document.querySelectorAll("#menu button");

    for (let i = 1; i < buttons.length; i++) {
        if (buttons[i].classList.contains("deactivate-button")) {
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
