'use strict'

const colors = [
    'black',
    'grey',
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'pink',
    'cyan',
]


colors.map(color => {
    const swatch = document.createElement('div')
    swatch.className = 'swatch'
    swatch.style.backgroundColor = color
    document.querySelector('#colors').appendChild(swatch)
})
