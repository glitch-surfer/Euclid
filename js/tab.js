document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.steps__btn').forEach(function(stepsBtn) {
        stepsBtn.addEventListener('click', function(event)  {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tab-content').forEach(function(workingBox) {
                workingBox.classList.remove('tab-content_active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content_active')
        })
    })
})