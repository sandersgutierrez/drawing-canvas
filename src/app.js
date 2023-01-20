'use strict'

import {
    CanvasComponent,
    ColorBoxComponent,
    ToolbarComponent,
    AbstractButtonComponent,
} from './components'
import './styles.css'

window.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app')
    app.appendChild(ToolbarComponent())
    app.querySelector('.toolbar')
        .appendChild(ColorBoxComponent())
        .appendChild(AbstractButtonComponent('radio'))

    app.appendChild(CanvasComponent())

    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')

    let dragging = false
    let radius = 2
    ctx.lineWidth = radius * 2

    function putPoint(e) {
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

    function engage(e) {
        dragging = true
        putPoint(e)
    }

    function disengage() {
        dragging = false
        ctx.beginPath()
    }

    canvas.addEventListener('mousedown', engage)
    canvas.addEventListener('mousemove', putPoint)
    canvas.addEventListener('mouseup', disengage)
})
