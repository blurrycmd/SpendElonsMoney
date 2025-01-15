// JavaScript for the theme-switch button.

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const darkIcon = document.getElementById("icon-dark");
const lightIcon = document.getElementById("icon-light");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
    
    setTimeout(() => {
    darkIcon.style.opacity = '0';
    lightIcon.style.opacity = '1';
    console.log("worked");
    }, 10);
    lightIcon.style.display = 'flex';
    darkIcon.style.display = 'none';

}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);

    setTimeout(() => {
    darkIcon.style.opacity = '1';
    lightIcon.style.opacity = '0';
    console.log("worked");
    }, 10)
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'flex';
    
}

if (darkmode === "active") {
    if (!document.body.classList.contains("darkmode")) {
        document.body.classList.add("darkmode");
    }
    localStorage.setItem("darkmode", "active");
    darkIcon.style.opacity = '0';
    lightIcon.style.opacity = '1';
}
else {
    darkIcon.style.opacity = '1';
    lightIcon.style.opacity = '0';
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
} );