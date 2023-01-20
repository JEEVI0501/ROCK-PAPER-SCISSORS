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
        userch.src='assets/rockWon.jpg'
    }
    if(user1 === 'paper')
    {
        userch.src='assets/paperWon.jpg'
    }
    if(user1 === 'scissors')
    {
        userch.src='assets/scissorHappy.jpg'
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
        compch.src='assets/rockWon.jpg'
    }
    if(randomNum === 2)
    {
        comp1='paper'
        compch.src='assets/paperWon.jpg'
    }
    if(randomNum === 3)
    {
        comp1='scissors'
        compch.src='assets/scissorHappy.jpg'
    }
    result()
}
function result()
{
    if(comp1==user1)
    {
        if(user1 === 'rock')
        {
            userch.src='assets/rockLost.jpg'
            compch.src='assets/rockLost.jpg'
        }
        if(user1 === 'paper')
        {
            userch.src='assets/paperSad.jpg'
            compch.src='assets/paperSad.jpg'
        }
        if(user1 === 'scissors')
        {
            userch.src='assets/scissorSad.jpg'
            compch.src='assets/scissorSad.jpg'
        }
    }
    if(comp1==='rock')
    {
        if(user1==='paper')
        {
            compch.src='assets/rockLost.jpg'
            uPoint+=1
            userPt.innerHTML=uPoint
        }
        if(user1 === 'scissors')
        {
            userch.src='assets/scissorSad.jpg'
            cPoint+=1
            compPt.innerHTML=cPoint
        }
    }
    if(comp1==='paper')
    {
        if(user1==='rock')
        {
            userch.src='assets/rockLost.jpg'
            cPoint+=1
            compPt.innerHTML=cPoint
        }
        if(user1 === 'scissors')
        {
            compch.src='assets/paperSad.jpg'
            uPoint+=1
            userPt.innerHTML=uPoint
        }
    }
    if(comp1==='scissors')
    {
        if(user1==='rock')
        {
            compch.src='assets/scissorSad.jpg'
            uPoint+=1
            userPt.innerHTML=uPoint
        }
        if(user1 === 'paper')
        {
            userch.src='assets/paperSad.jpg'
            cPoint+=1
            compPt.innerHTML=cPoint
        }
    }
}