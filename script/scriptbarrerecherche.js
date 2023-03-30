//barre de recherche script

const searchBox = document.querySelector(".search-box");
const searchInput = searchBox.querySelector("input");
const searchButton = searchBox.querySelector("button");

searchInput.addEventListener("keyup", (event) => {
    const searchText = event.target.value.toLowerCase();
    const navLinks = document.querySelectorAll(".navbar-nav li a");
    navLinks.forEach((link) => {
        const linkText = link.textContent.toLowerCase();
        if (linkText.includes(searchText)) {
            link.style.display = "block";
        } else {
            link.style.display = "none";
        }
    });
});

searchButton.addEventListener("click", () => {
    searchInput.value = "";
    const navLinks = document.querySelectorAll(".navbar-nav li a");
    navLinks.forEach((link) => {
        link.style.display = "block";
    });
});