const panels = document.querySelectorAll('.panel')
const frame = document.querySelector('.frame')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        frame.style.backgroundImage = panel.style.backgroundImage
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}