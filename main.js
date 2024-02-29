const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

canvas.height = canvas.clientHeight
canvas.width = canvas.clientWidth
let width = canvas.width
let height = canvas.height

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

function ReDraw()
{
    ctx.clearRect(0,0,800,700)
    DrawTree(200)
}

// canvas.addEventListener("mousemove",e=>
// {
//     console.log(e.x,e.y);
// }) 

function DrawTree(amount)
{   
    ctx.save()
    let angle = 0.67
    const Right = document.querySelector('#right').value
    const Left = document.querySelector('#left').value
    let rotateAngleR = Right
    let rotateAngleL = Left
    DrawLine(0,0,0,-amount)
    ctx.translate(0,-amount)
    if(amount > 1)
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