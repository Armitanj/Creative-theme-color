const $ = document;

const themeCssVariable = $.querySelector(':root')
const colorBtns = $.querySelectorAll('.btn')

colorBtns.forEach(colorBtn => {
    colorBtn.addEventListener('click', event => {
        let mainThemeColor = event.target.dataset.color;
        themeCssVariable.style.setProperty('--theme-color', mainThemeColor)
        console.log('Theme color code is', mainThemeColor);
    })
})
