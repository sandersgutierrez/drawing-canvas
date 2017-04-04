'use strict'

var canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')

const radius = 10
var dragging = false

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var putPoint = (e) => {
    if (dragging) {
        ctx.beginPath()
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2)
        ctx.fill()
    }
}

var engage = (e) => {
    dragging = true
    putPoint(e)
}

var disengage = () => {
    dragging = false
}

canvas.addEventListener('mousedown', engage)
canvas.addEventListener('mousemove', putPoint)
canvas.addEventListener('mouseup', disengage)
