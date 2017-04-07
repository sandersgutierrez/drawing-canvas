'use strict'

var minRad = 0.5,
    maxRad = 100,
    defaultRad = 20,
    interval = 1,
    radSpan = document.querySelector('#radval'),
    decrad = document.querySelector('#decrad'),
    incrad = document.querySelector('#incrad')

var setRadius = (newRadius) => {
    if (newRadius < minRad) {
        newRadius = minRad
    } else if (newRadius > maxRad) {
        newRadius = maxRad
    }
    radius = newRadius
    ctx.lineWidth = radius * 2
    radSpan.textContent = radius
}

decrad.addEventListener('click', () => {
    setRadius(radius - interval)
})

incrad.addEventListener('click', () => {
    setRadius(radius + interval)
})
