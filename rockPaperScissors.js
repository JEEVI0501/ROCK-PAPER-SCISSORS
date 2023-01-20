const compch = document.getElementById("com2")
const userch = document.getElementById("user2")

const compPt = document.getElementById("cp")
const userPt = document.getElementById("up")

let cPoint=0
let uPoint=0

let user1
let comp1

const possiblech = document.querySelectorAll('button')
possiblech.forEach(ch =>ch.addEventListener('click',(e) => {
    user1=e.target.id
    if(user1 === 'rock')
    {
        userch.src='rockWon.jpg'
    }
    if(user1 === 'paper')
    {
        userch.src='paperWon.jpg'
    }
    if(user1 === 'scissors')
    {
        userch.src='scissorHappy.jpg'
    }
    compChoice()
}))

function compChoice()
{
    const randomNum = Math.floor(Math.random()*3)+1
    // console.log(randomNum)
    if(randomNum === 1)
    {
        comp1='rock'
        compch.src='rockWon.jpg'
    }
    if(randomNum === 2)
    {
        comp1='paper'
        compch.src='paperWon.jpg'
    }
    if(randomNum === 3)
    {
        comp1='scissors'
        compch.src='scissorHappy.jpg'
    }
    result()
}
function result()
{
    if(comp1==user1)
    {
        if(user1 === 'rock')
        {
            userch.src='rockLost.jpg'
            compch.src='rockLost.jpg'
        }
        if(user1 === 'paper')
        {
            userch.src='paperSad.jpg'
            compch.src='paperSad.jpg'
        }
        if(user1 === 'scissors')
        {
            userch.src='scissorSad.jpg'
            compch.src='scissorSad.jpg'
        }
    }
    if(comp1==='rock')
    {
        if(user1==='paper')
        {
            compch.src='rockLost.jpg'
            uPoint+=1
            userPt.innerHTML=uPoint
        }
        if(user1 === 'scissors')
        {
            userch.src='scissorSad.jpg'
            cPoint+=1
            compPt.innerHTML=cPoint
        }
    }
    if(comp1==='paper')
    {
        if(user1==='rock')
        {
            userch.src='rockLost.jpg'
            cPoint+=1
            compPt.innerHTML=cPoint
        }
        if(user1 === 'scissors')
        {
            compch.src='paperSad.jpg'
            uPoint+=1
            userPt.innerHTML=uPoint
        }
    }
    if(comp1==='scissors')
    {
        if(user1==='rock')
        {
            compch.src='scissorSad.jpg'
            uPoint+=1
            userPt.innerHTML=uPoint
        }
        if(user1 === 'paper')
        {
            userch.src='paperSad.jpg'
            cPoint+=1
            compPt.innerHTML=cPoint
        }
    }
}