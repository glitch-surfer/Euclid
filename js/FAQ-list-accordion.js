window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.FAQ-list__btn').forEach(function (el) {
        el.addEventListener('click', function() {
            el.classList.toggle('icon-rotate')
            let content = el.nextElementSibling
            content.classList.toggle('FAQ-list__accordion-is-active')
            
    })
    })
})