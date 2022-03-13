const buttonDropdown = document.getElementById('btn-dropdown');
const buttonMobile = document.getElementById('btn-mobile');

function dropdownMenu() {
    const dropdown = document.getElementById('dropdown');
    const icon = document.getElementById('icon');

    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden')
        dropdown.classList.add('visible');
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
    } else {
        dropdown.classList.remove('visible');
        dropdown.classList.add('hidden');
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
    }
}

function mobileMenu() {
    const container = document.getElementById('menu-container');

    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        container.classList.add('visible');

    } else {
        container.classList.remove('visible');
        container.classList.add('hidden');
    }
}

buttonDropdown.addEventListener('click', dropdownMenu);
buttonMobile.addEventListener('click', mobileMenu);
