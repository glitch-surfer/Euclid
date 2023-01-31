window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.add('is-active')
    })
})