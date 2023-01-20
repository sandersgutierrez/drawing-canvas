'use strict'

export const CanvasComponent = () => {
    const canvasElement = document.createElement('canvas')
    canvasElement.id = 'canvas'
    canvasElement.height = window.innerHeight
    canvasElement.width = window.innerWidth
    canvasElement.innerHTML = 'Su navegador no soporta canvas'
    return canvasElement
}

export const ColorBoxComponent = () => {
    const colorBoxElement = document.createElement('div')
    colorBoxElement.id = 'colors'
    return colorBoxElement
}

export const ToolbarComponent = () => {
    const toolbarElement = document.createElement('div')
    toolbarElement.className = 'toolbar'
    return toolbarElement
}

export const AbstractButtonComponent = (id = '') => {
    const abstractButtonComponent = document.createElement('span')
    abstractButtonComponent.id = id
    return abstractButtonComponent
}
