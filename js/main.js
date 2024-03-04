// Watch for the scroll to set CSS classes
const animatedElements = document.querySelectorAll('[data-animated]')
let height = window.innerHeight/1.4;

window.addEventListener('scroll', () => {
    animatedElements.forEach(element => {
        let sectionTop = element.getBoundingClientRect().top;
        if (sectionTop < height) {
            let animationName = element.dataset.animated;
            element.classList.add(animationName);
        }
    })
})

// Set the color theme
let theme = document.getElementById('theme');
let colorModeButton = document.querySelector('.color__mode');
let languageModeButton = document.querySelector('.language__mode');

colorModeButton.addEventListener('click', () => {
    colorModeButton.dataset.color === 'dark-mode' ? colorModeButton.setAttribute('data-color', 'light-mode') : colorModeButton.setAttribute('data-color', 'dark-mode');
    switch (colorModeButton.dataset.color) {
        case 'light-mode': theme.href = 'css/lightStyle.css';
        console.log(theme)
        break;

        case 'dark-mode': theme.href = 'css/darkStyle.css';
        console.log(theme);
        break;
    }
})

// Closes menu when click on link
let navbar = document.querySelector('.hero__nav');
let checkButton = document.querySelector('#check');

navbar.addEventListener('click', (e) => {
    if (e.target.classList.contains('hero__nav-link')) {
        checkButton.checked = false;
    } 
})