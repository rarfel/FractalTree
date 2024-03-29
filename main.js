const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

canvas.height = canvas.clientHeight
canvas.width = canvas.clientWidth
let width = canvas.width
let height = canvas.height
let regua
DeterminateSize()

ctx.translate(width/2,height)

function DrawLine(x1,y1,x2,y2)
{
    ctx.strokeStyle = "#fff"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()
}

ReDraw()

window.onresize = () =>
{
    canvas.height = canvas.clientHeight
    canvas.width = canvas.clientWidth
    let width = canvas.width
    let height = canvas.height
    DeterminateSize()
    ctx.translate(width/2,height)
    ReDraw()
}

function DeterminateSize()
{
    if(window.innerWidth <= 350)
    {
        regua = 70
        let height = canvas.height/2
    }
    if(window.innerWidth >= 350)
    {
        regua = 100
        let height = canvas.height
    }
    if(window.innerWidth >= 510)
    {
        regua = 150
        let height = canvas.height * 2
    }
}

function ReDraw()
{
    ctx.clearRect(-width/2,-height,width,height)
    DrawTree(regua)
}

function DrawTree(amount)
{   
    ctx.save()
    let angle = 0.67
    const Right = document.querySelector('#right').value
    const Left = document.querySelector('#left').value
    const RightValue = document.querySelector('.rightValue')
    const LeftValue = document.querySelector('.leftValue')
    RightValue.innerText = `${Right}°`
    LeftValue.innerText = `${Left}°`
    let rotateAngleR = Right
    let rotateAngleL = Left
    DrawLine(0,0,0,-amount)
    ctx.translate(0,-amount)
    if(amount > 4)
    {
        ctx.save()
        ctx.rotate((rotateAngleR * Math.PI) / 180)
        DrawTree(amount*angle)
        ctx.restore()
        ctx.save()
        ctx.rotate(-(rotateAngleL * Math.PI) / 180)
        DrawTree(amount*angle)
        ctx.restore()
    }
    ctx.restore()
}
