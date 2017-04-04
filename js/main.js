'use strict'

var canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')

const radius = 10

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var putPoint = (e) => {
    ctx.beginPath()
    ctx.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2)
    ctx.fill()
}

canvas.addEventListener('mousedown', putPoint)
