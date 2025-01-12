// Don't click on Elon!
function angry() {
    var image = document.getElementsByClassName("pfp")[0];
    image.style.filter = "sepia(100%) saturate(500%) hue-rotate(-50deg)";
    image.classList.add("shake");
    setTimeout(function() {
        image.style.filter = null;
        image.classList.remove("shake");
    }, 400);
}