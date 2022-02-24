const ButtonDropdown = document.getElementById('btn-dropdown');
const ButtonMobile = document.getElementById('btn-mobile');

function DropdownMenu() {
    let Dropdown = document.getElementById('dropdown');
    let icon = document.getElementById('icon');

    if (Dropdown.style.display === "none") {
        Dropdown.style.display = "block";
        icon.classList.remove('bi-chevron-down')
        icon.classList.add('bi-chevron-up')

    } else {
        Dropdown.style.display = "none";
        icon.classList.remove('bi-chevron-up')
        icon.classList.add('bi-chevron-down')
    }
}

function MobileMenu() {
    let Container = document.getElementById('menu-container');
    let IconHamb = document.getElementById('hamb');

    if (Container.style.display === "none") {
        Container.style.display = "block";

    } else {
        Container.style.display = "none";
    }
}

ButtonDropdown.addEventListener('click', DropdownMenu);
ButtonMobile.addEventListener('click', MobileMenu);
