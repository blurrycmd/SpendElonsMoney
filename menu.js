// JavaScript for the menu button.

let menuOpen = false;
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon"); 
const menu = document.getElementById("menu_btn");
const home = document.getElementById("home_btn");
const receipt = document.getElementById("receipt_btn");
const theme= document.getElementById("theme-switch");

const openMenu = () => {
    menuOpen = true;
    //menu.classList.toggle('hidden');
    setTimeout(() => {
    menuIcon.style.opacity = '0';
    closeIcon.style.opacity = '1';
    }, 10)
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'flex';
        

    home.style.display = 'flex';
    setTimeout(() => {
    home.classList.toggle('hidden');
    home.style.opacity = '1';
    home.style.bottom = '175px';
    }, 10);

    receipt.style.display = 'flex';
    setTimeout(() => {
    receipt.classList.toggle('hidden');
    receipt.style.opacity = '1';
    receipt.style.bottom = '120px';
    }, 10);

    theme.style.display = 'flex';
    setTimeout(() => {
    theme.classList.toggle('hidden');
    theme.style.opacity = '1';
    theme.style.bottom = '65px';
    }, 10);

}

const closeMenu = () => {
    menuOpen = false;
    //menu.classList.toggle('hidden');

    setTimeout(() => {
    closeIcon.style.opacity = '0';
    menuIcon.style.opacity = '1';
    }, 10)
    menuIcon.style.display = 'flex';
    closeIcon.style.display = 'none';

    home.style.opacity = '0';
    home.style.bottom = '10px';
    setTimeout(() => {
    home.style.display = 'none';
    home.classList.toggle('hidden');
    }, 200);
    
    
    receipt.style.opacity = '0';
    receipt.style.bottom = '10px';
    setTimeout(() => {
    receipt.style.display = 'none';
    receipt.classList.toggle('hidden');
    }, 200);
    
    theme.style.opacity = '0';
    theme.style.bottom = '10px';
    setTimeout(() => {
    theme.style.display = 'none';
    theme.classList.toggle('hidden');
    }, 200);
    
}

menu.addEventListener("click", () => {
    menuOpen !== true ? openMenu() : closeMenu();
    console.log(menuOpen);
} )

//Menu: 10
//Home: 175
//Receipt: 120
//Theme: 55