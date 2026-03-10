const body=document.querySelector("#body")
const button=document.querySelector("#black")
const hornetBtn = document.querySelector("#hornetBtn")
const hornetPara = document.querySelector("#hornetVal")

let hornetValue = 0
let multiplier = 1
let distance = 0
let distanceX=0

hornetBtn.addEventListener("click",addValue)
button.addEventListener("click",colorchange)

function colorchange(){
  if (body.style.backgroundColor=="white"){
    body.style.backgroundColor="black"
  }
  else{
    body.style.backgroundColor="white"
  }
  
}
function addValue(){
  spawnParticles()
  hornetValue+=multiplier
  hornetPara = `Rosaries: ${hornetPara}`
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
  console.log(hornetValue)
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

  const gravity = 600 
  const steps = 50

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