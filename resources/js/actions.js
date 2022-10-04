let navButton = document.getElementById("show-nav-button");

navButton.onclick = function() {
    navButton.innerHTML = navButton.innerHTML === "Toon navigatie"
        ? "Verberg navigatie"
        : "Toon navigatie";

    document.querySelectorAll("nav li").forEach(function(item, index) {
        item.classList.toggle("visible");
    })
}