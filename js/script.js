const ButtonMenu = document.getElementById('btn-menu')

function DropdownMenu() {
    const Dropdown = document.getElementById('dropdown');
    const icon = document.getElementById('icon');

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

ButtonMenu.addEventListener('click', DropdownMenu)