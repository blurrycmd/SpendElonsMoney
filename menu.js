// JavaScript for the menu button.

let menuOpen = false;
const menu = document.getElementById("menu_btn");
const home = document.getElementById("home_btn");
const receipt = document.getElementById("receipt_btn");
const theme= document.getElementById("theme-switch");

const openMenu = () => {
    menuOpen = true;
    menu.classList.remove('hidden');
    home.classList.remove('hidden');
    receipt.classList.remove('hidden');
    theme.classList.remove('hidden');
}

const closeMenu = () => {
    menuOpen = false;
    menu.classList.add('hidden');
    home.classList.add('hidden');
    receipt.classList.add('hidden');
    theme.classList.add('hidden');
}

menu.addEventListener("click", () => {
    menuOpen !== true ? openMenu() : closeMenu();
    console.log(menuOpen);
} )