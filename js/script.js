const buttonDropdown = document.getElementById('btn-dropdown');
const buttonMobile = document.getElementById('btn-mobile');

function dropdownMenu() {
    const dropdown = document.getElementById('dropdown');
    const icon = document.getElementById('icon');

    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');

    } else {
        dropdown.style.display = "none";
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
    }
}

function mobileMenu() {
    const container = document.getElementById('menu-container');
    
    if (container.style.display === "none") {
        container.style.display = "block";

    } else {
        container.style.display = "none";
    }
}

buttonDropdown.addEventListener('click', dropdownMenu);
buttonMobile.addEventListener('click', mobileMenu);
