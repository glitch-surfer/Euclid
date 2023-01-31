window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#close-menu-icon').addEventListener('click', function () {
        document.querySelector('#menu').classList.remove('is-active')
    })
})