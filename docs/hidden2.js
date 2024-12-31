//button for About dropdown
const buttonDropdown7 = document.getElementById("choose-button");

//content for About page
const dropdownContent7 = document.getElementById("choose-content");

//event listeners for About page
buttonDropdown7.addEventListener("click", () => {
    dropdownContent7.classList.toggle("show");
});
