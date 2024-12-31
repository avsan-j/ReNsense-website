const dropdownButton = document.getElementById("more-button");
const dropdownContent = document.getElementById("more-content");

dropdownButton.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
});
