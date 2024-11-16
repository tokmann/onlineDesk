const curtain = document.getElementById('curtain')

const curtain_handler = () => {
    curtain.classList.add("curtain-hidden")
}




const curtainSize = document.getElementsByClassName("canvas")[0]
const config = {
    'color': 'black',
    'lineSize': 3
}

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.setAttribute('width', curtainSize.offsetWidth)
canvas.setAttribute('height', curtainSize.offsetHeight)

ctx.lineWidth = config.lineSize
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.strokeStyle = config.color
ctx.fillStyle = config.color


var isRec = false,
    newDraw = false,
    posX = [],
    posY = []

canvas.addEventListener("mousedown", (e) => {
    if (isRec) return
    clearCanvas()
    canvas.onmousemove = (e) => recordMousePos(e)
})

const clearCanvas = () => {
    if (newDraw) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        newDraw = false
    }
    ctx.beginPath()
}

const recordMousePos = (e) => {
    posX.push(e.clientX)
    posY.push(e.clientY)
    drawLine(e.clientX, e.clientY)
}

const drawLine = (x, y) => {
    ctx.lineTo(x, y)
    ctx.stroke()
}

canvas.addEventListener("mouseup", () => stopDrawing())

const stopDrawing = () => {
    canvas.onmousemove = null
    posX.push(undefined)
    posY.push(undefined)
}
