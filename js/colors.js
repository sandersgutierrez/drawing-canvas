'use strict'

var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'cyan']
var swatches = document.getElementsByClassName('swatch')

for (let i = 0, n = swatches.length; i < n; i++) {
    swatches[i].addEventListener('click', setSwatch)
}

for (let i = 0, n = colors.length; i < n; i++) {
    var swatch = document.createElement('div')
    swatch.className = 'swatch'
    swatch.style.backgroundColor = colors[i]
    swatch.addEventListener('click', setSwatch)
    document.querySelector('#colors').appendChild(swatch)
}

function setSwatch(e) {
    let swatch = e.target
    setColor(swatch.style.backgroundColor)
    swatch.className += ' active'
}

function setColor(color) {
    ctx.fillStyle = color
    ctx.strokeStyle = color
    let active = document.getElementsByClassName('active')[0]
    if (active) {
        active.className = 'swatch'
    }
}

setSwatch({
    target: document.getElementsByClassName('swatch')[0]
})
