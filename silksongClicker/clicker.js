
const lighttool=document.querySelector("#lighttool")
const hornetBtn = document.querySelector("#hornetBtn1")
const hornetPara = document.querySelector("#hornetVal")
const sharpen=document.querySelector("#sharpen")
const rpsText=document.querySelector("#rps")
const body=document.querySelector("#body")
const upg1Desc=document.querySelector("#upg1Desc")
const upg2Desc=document.querySelector("#upg2Desc")
const upg3Desc=document.querySelector("#upg3Desc")
const upgradeContainer=document.querySelector("#upgradeContainer")
const upg1 = document.querySelector("#upg1")
const threefoldBtn=document.querySelector("#threefold")
const upg2 = document.querySelector("#upg2")
const upg3 = document.querySelector("#upg3")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")



const soundList = ["deeperren.mp3", "gauruma.mp3", "haaa.mp3", "hegale.mp3", "hornet_edino.mp3", "hornet_gitgud.mp3", "ren.mp3", "shaw.mp3"]
const btnList = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, hornetBtn]
const upgList = [upg1, upg2, upg3]
const upgChildren = [upg1Desc, upg2Desc, upg3Desc]
let roseValue = 12893749812734
let multiplier = 1
let distance = 0
let hornetBtnNew = null
let distanceX=0

let throwerCost = 50
let thrower=null
let throwerCount=0

let sharpCost=200
let sharp=null
let sharpCount=0

let rpsCounter = 0
let rps = 0
let rpsSubtract = 0

let threefoldCost = 750
let threefold=null
let threefoldCount=0

sharpen.addEventListener("click",sharpened)
hornetBtn.addEventListener("click",addValue)
lighttool.addEventListener("click",throwy)
threefoldBtn.addEventListener("click",threefoldfunc)
btn1.addEventListener("click",addValue)
btn2.addEventListener("click",addValue)
btn3.addEventListener("click",addValue)
btn4.addEventListener("click",addValue)
btn5.addEventListener("click",addValue)
btn6.addEventListener("click",addValue)
btn7.addEventListener("click",addValue)
btn8.addEventListener("click",addValue)
upgList.forEach((el, idx) => {
  if (!el) return
  el.addEventListener('mouseenter', () => {
    upgChildren[idx].style.display = 'block'
  })
  el.addEventListener('mouseleave', () => {
    upgChildren[idx].style.display = 'none'
  })
})
addEventListener("keydown",(e)=>{
  if (e.code=="Space"){
    e.preventDefault()
    addValue()
  }
})
setInterval(()=>{
  rpsText.textContent=`Your RPS is: ${rps}`
  rps=0
},1000)
setInterval(()=>{
  hornetPara.textContent = `Rosaries: ${roseValue}`
})
function colorchange(){
  if (body.style.backgroundColor!="black"){
    body.style.backgroundColor="black"
  }
  else{
    body.style.backgroundColor="white"
  }
  
}
function addValue(){
  // spawn before we hide/swap the button so particles originate from
  // the image the user actually clicked
  spawnParticles()
  roseValue+=multiplier
  hornetPara.textContent = `Rosaries: ${roseValue}`
  setTimeout(() =>{
      hornetBtn.style.transform="scale(1.16)"
      hornetBtnNew.style.transform="scale(1.16)"
    }, 0)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(1.2)"
      hornetBtnNew.style.transform="scale(1.2)"
    }, 10)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(1.24)"
      hornetBtnNew.style.transform="scale(1.24)"
    }, 20)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(1.28)"
      hornetBtnNew.style.transform="scale(1.28)"
    }, 30)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(1.32)"
      hornetBtnNew.style.transform="scale(1.32)"
    }, 40)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(1.36)"
      hornetBtnNew.style.transform="scale(1.36)"
    }, 50)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(1.36)"
      hornetBtnNew.style.transform="scale(1.36)"
    }, 60)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(1.32)"
      hornetBtnNew.style.transform="scale(1.32)"
    }, 70)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(1.28)"
      hornetBtnNew.style.transform="scale(1.28)"
    }, 80)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(1.24)"
      hornetBtnNew.style.transform="scale(1.24)"
    }, 90)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(0.95)"
      hornetBtnNew.style.transform="scale(0.95)"
    }, 100)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(0.8)"
      hornetBtnNew.style.transform="scale(0.8)"
    }, 110)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(0.7)"
      hornetBtnNew.style.transform="scale(0.7)"
    }, 120)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(0.88)"
      hornetBtnNew.style.transform="scale(0.88)"
    }, 130)
    
    setTimeout(() =>{
      hornetBtn.style.transform="scale(1)"
      hornetBtnNew.style.transform="scale(1)"
    }, 140)
  console.log(roseValue)
  if (hornetBtnNew != null){
    hornetBtnNew.style.display = "none"
  }
  hornetBtn.style.display = "none"
  randomBtn = Math.floor(Math.random() * btnList.length)
  hornetBtnNew = btnList[randomBtn]
  hornetBtnNew.style.display = "block"
  randomHorn = soundList[Math.floor(Math.random()*(soundList.length))]
  audioHorn = new Audio(src=randomHorn)
  audioHorn.play()

}

function spawnParticles() {
  const activeButton = hornetBtnNew || hornetBtn
  const btnRect = activeButton.getBoundingClientRect()
  const targetRect = hornetPara.getBoundingClientRect()

  const startX = btnRect.left + btnRect.width / 2
  const startY = btnRect.top + btnRect.height / 2
  const targetX = targetRect.left + targetRect.width / 2
  const targetY = targetRect.top + targetRect.height / 2 - 40 

  const particleCount = 1*multiplier
  if (particleCount>=10){
    particleCount=10
  }

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('img')
    particle.className = 'particle'
    particle.src = 'https://www.silk-song.org/_next/image?url=%2Fimages%2Fitems%2Frosaries.png&w=640&q=75'

    // start at (or near) the hornet button center
    const jitterStartX = startX + (Math.random() - 0.5) * btnRect.width * 0.5
    const jitterStartY = startY + (Math.random() - 0.5) * btnRect.height * 0.5

    // small random end offset so particles don't stack exactly
    const jitterEndX = (Math.random() - 0.5) * 20
    const jitterEndY = (Math.random() - 0.5) * 12

    // styles for animation
    const duration = 700 + Math.floor(Math.random() * 300) // ms
    Object.assign(particle.style, {
      position: 'absolute',
      left: `${jitterStartX}px`,
      top: `${jitterStartY}px`,
      width: '28px',
      height: '28px',
      transform: 'translate(-50%,-50%) scale(1)',
      transition: `left ${duration}ms cubic-bezier(.2,.9,.2,1), top ${duration}ms cubic-bezier(.2,.9,.2,1), transform ${duration}ms linear, opacity ${duration}ms linear`,
      zIndex: 9999,
      pointerEvents: 'none',
      opacity: '1'
    })

    document.body.appendChild(particle)

    // force style flush so transition will run
    requestAnimationFrame(() => {
      // move to target (center of hornetPara) with a little jitter
      particle.style.left = `${targetX + jitterEndX}px`
      particle.style.top = `${targetY + jitterEndY}px`
      // shrink & fade as it arrives
      particle.style.transform = 'translate(-50%,-50%) scale(0.4)'
      particle.style.opacity = '0'
    })

    // remove after animation completes
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, 1000)
  }
}
function throwy(){
  if (roseValue >= throwerCost){

    if(!thrower){
      thrower = setInterval(() =>{
        roseValue += throwerCount
        rps += throwerCount
      },1000)
    }

    throwerCount += 1
    roseValue -= throwerCost
    throwerCost = Math.trunc(throwerCost * 1.1)

    lighttool.textContent =
      `Get a Light Throwing Tool that gets you 1 Rosarie per second! Cost: ${throwerCost} Rosaries`
  }
}

function sharpened(){
  if (roseValue >= sharpCost){

    if(!sharp){
      sharp = setInterval(() =>{
        roseValue += sharpCount
        rps += sharpCount
      },200)
    }

    sharpCount += 1
    roseValue -= sharpCost
    sharpCost = Math.trunc(sharpCost * 1.1)

    sharpen.textContent =
      `Get your Nail to slash attack the button for 5 Rosaries a second! Cost: ${sharpCost} Rosaries`
  }
}
function threefoldfunc(){
  if (roseValue >= threefoldCost){

    if(!threefold){
      threefold = setInterval(() =>{
        roseValue += 3*threefoldCount
        rps += 3*threefoldCount
      },200)
    }

    threefoldCount += 1
    roseValue -= threefoldCost
    threefoldCost = Math.trunc(threefoldCost * 1.1)

    threefoldBtn.textContent = `Get your Threefold Pin and throw pins at the button for 15 Rosaries a second! Cost: ${threefoldCost} Rosaries`
  }
}