// curtain move
const curtain = document.getElementById('curtain')

const curtain_handler = () => {
    curtain.classList.add("curtain-hidden")
}


// canvas drawing
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.style.cursor = "url('https://img.icons8.com/?size=40&id=ZG5L7GewHO9G&format=png&color=000000'), auto"
const config = {
    'currentTool': 'pen',
    'color': 'black',
    'lineSize': 5
}

const pen_tool = () => {
    ctx.lineWidth = 5
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black'

    config.currentTool = 'pen'
    canvas.style.cursor = "url('https://img.icons8.com/?size=40&id=ZG5L7GewHO9G&format=png&color=000000'), auto"
}

const eraser_tool = () => {
    ctx.lineWidth = 17
    ctx.strokeStyle = 'white'
    ctx.fillStyle = 'white'

    config.currentTool = 'eraser'
    canvas.style.cursor = "url('https://img.icons8.com/?size=40&id=78855&format=png&color=000000'), auto"
}



const setConfig = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.lineWidth = config.lineSize
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.strokeStyle = config.color
    ctx.fillStyle = config.color
}

setConfig()
window.addEventListener('resize', setConfig)

const state = {
    isRec: false,
    newDraw: false
}



canvas.addEventListener("mousedown", (e) => {
    if (state.isRec) return
    clearCanvas()
    canvas.onmousemove = (e) => recordMousePos(e)
})

const clearCanvas = () => {
    if (state.newDraw) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        state.newDraw = false
    }
    ctx.beginPath()
}

const recordMousePos = (e) => {
    drawLine(e.clientX, e.clientY)
}

const drawLine = (x, y) => {
    if (config.currentTool == 'pen') {
        ctx.lineTo(x + 13, y - 62)
    }
    else {
        ctx.lineTo(x + 10, y - 65)
    }
    ctx.stroke()
}

canvas.addEventListener("mouseup", () => stopDrawing())

const stopDrawing = () => {
    canvas.onmousemove = null
}


