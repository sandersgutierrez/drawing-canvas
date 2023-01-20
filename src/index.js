'use strict'

import './styles.css'

var canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var dragging = false
var radius = 2

ctx.lineWidth = radius * 2

var putPoint = (e) => {
    if (dragging) {
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }
}

var engage = (e) => {
    dragging = true
    putPoint(e)
}

var disengage = () => {
    dragging = false
    ctx.beginPath()
}

canvas.addEventListener('mousedown', engage)
canvas.addEventListener('mousemove', putPoint)
canvas.addEventListener('mouseup', disengage)
