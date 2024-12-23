//buttons for Home dropdown
const buttonDropdown1 = document.getElementById("myth-button1");
const buttonDropdown2 = document.getElementById("myth-button2");
const buttonDropdown3 = document.getElementById("myth-button3");
const buttonDropdown4 = document.getElementById("myth-button4");
const buttonDropdown5 = document.getElementById("myth-button5");
const buttonDropdown6 = document.getElementById("myth-button6");

//button for About dropdown
const buttonDropdown7 = document.getElementById("choose-button");

//contents for Home page
const dropdownContent1 = document.getElementById("myth-content1");
const dropdownContent2 = document.getElementById("myth-content2");
const dropdownContent3 = document.getElementById("myth-content3");
const dropdownContent4 = document.getElementById("myth-content4");
const dropdownContent5 = document.getElementById("myth-content5");
const dropdownContent6 = document.getElementById("myth-content6");

//content for About page
const dropdownContent7 = document.getElementById("choose-content");

//event listeners for Home page
buttonDropdown1.addEventListener("click", () => {
    dropdownContent1.classList.toggle("show");
});

buttonDropdown2.addEventListener("click", () => {
    dropdownContent2.classList.toggle("show");
});

buttonDropdown3.addEventListener("click", () => {
    dropdownContent3.classList.toggle("show");
});

buttonDropdown4.addEventListener("click", () => {
    dropdownContent4.classList.toggle("show");
});

buttonDropdown5.addEventListener("click", () => {
    dropdownContent5.classList.toggle("show");
});

buttonDropdown6.addEventListener("click", () => {
    dropdownContent6.classList.toggle("show");
});

//event listeners for About page

buttonDropdown7.addEventListener("click", () => {
    dropdownContent7.classList.toggle("show");
});
