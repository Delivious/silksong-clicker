const body=document.querySelector("#body")
const lighttool=document.querySelector("#lighttool")
const hornetBtn = document.querySelector("#hornetBtn")
const hornetPara = document.querySelector("#hornetVal")

let roseValue = 50
let multiplier = 1
let distance = 0
let distanceX=0
let throwerCost = 50
let thrower=null
let throwerCount=0

let ai = null
let aiCount=0
let clickerValue = 500
let clickVal = 1
let pik = false
let cpsCounter = 0
let cps = 0
let cpsSubtract = 0
let amountToSpawn = 1
let howFastFall = 1100
let randomPik = null
let collegeCount = 0
let seniorBase = 3.5
let teenCount = 0
let seniorCount = 0
let increase = true
let randomStatus = true
let aiBroken = false
let teenValue = 100
let collValue = 275
let ep = false
let teen = null
let aiCheck = null
let college = null
hornetBtn.addEventListener("click",addValue)
lighttool.addEventListener("click",throwy)


function colorchange(){
  if (body.style.backgroundColor!="black"){
    body.style.backgroundColor="black"
  }
  else{
    body.style.backgroundColor="white"
  }
  
}
function addValue(){
  spawnParticles()
  roseValue+=multiplier
  hornetPara.textContent = `Rosaries: ${roseValue}`
  setTimeout(() =>{
      hornetBtn.style.transform="rotate(-4deg) scale(1.16)"
    }, 0)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-6deg) scale(1.24)"
    }, 10)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-8deg) scale(1.32)"
    }, 20)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-10deg) scale(1.40)"
    }, 30)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-13deg) scale(1.48)"
    }, 40)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-16deg) scale(1.56)"
    }, 50)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-20deg) scale(1.56)"
    }, 60)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-16deg) scale(1.48)"
    }, 70)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-13deg) scale(1.40)"
    }, 80)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-10deg) scale(1.32)"
    }, 90)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-8deg) scale(0.95)"
    }, 100)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(-6deg) scale(0.8)"
    }, 110)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(4deg) scale(0.7)"
    }, 120)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(2deg) scale(0.88)"
    }, 130)
    
    setTimeout(() =>{
      hornetBtn.style.transform="rotate(0deg) scale(1)"
    }, 140)
  console.log(roseValue)
}

function spawnParticles() {
  const imageRect = hornetBtn.getBoundingClientRect()
  const centerX = imageRect.left + imageRect.width / 2
  const centerY = imageRect.top + imageRect.height / 2
  

  const particleCount = Math.floor(Math.random() * 4) + 5
  
  for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('img')
      particle.className = 'particle'
      particle.src = 'https://www.silk-song.org/_next/image?url=%2Fimages%2Fitems%2Frosaries.png&w=640&q=75'
    
      particle.style.left = Math.floor(Math.random() * imageRect.width) + imageRect.left + 'px'
      particle.style.top = Math.floor(Math.random() * imageRect.height) + imageRect.top + 'px'
    
    document.body.appendChild(particle)
    cashExplode(particle, imageRect)
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, 1000)
  }
}

function cashExplode(particle, imageRect) {
  const startX = parseFloat(particle.style.left)
  const startY = parseFloat(particle.style.top)
  const imageRectX = imageRect.left
  const imageRectY = imageRect.top
  const imageRectXOpposite = -imageRect.left
  const imageRectYOpposite = -imageRect.top
  const duration = 1
    const angle = (Math.random() - 0.5) * Math.PI / 2 
    const speed = Math.random() * 200 + 150              
    let vx = Math.cos(angle) * speed
    let vy = -Math.abs(Math.sin(angle) * speed)

  const gravity = -320 
  const steps = 100

  for (let i = 0; i <= steps; i++) {
    setTimeout(() => {
      const t = (i / steps) * duration
      const x = startX + vx * t
      const y = startY + vy * t + 0.5 * gravity * t * t
      
      if (x < imageRectX || x > imageRectXOpposite) {
        vx -= 50 * t
      } 
      else {
        vx += 50 * t 
      }
      particle.style.left = x + 'px'
      particle.style.top = y + 'px'
    }, (i * duration / steps) * 1000)
  }
}

function throwy(){
  if (roseValue >= throwerCost){

    if(!thrower){
      thrower = setInterval(() =>{
        roseValue += throwerCount
        cps += throwerCount
      },1000)
    }

    throwerCount += 1
    roseValue -= throwerCost
    throwerCost = Math.trunc(throwerCost * 1.2)

    lighttool.textContent =
      `Get a Light Throwing Tool that gets you 1 Rosarie per second! Cost: ${throwerCost} Rosaries`
  }
}