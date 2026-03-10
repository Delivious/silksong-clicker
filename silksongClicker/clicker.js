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
  if (body.style.backgroundColor!="black"){
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
  const btnRect = hornetBtn.getBoundingClientRect()
  const targetRect = hornetPara.getBoundingClientRect()

  const startX = btnRect.left + btnRect.width / 2
  const startY = btnRect.top + btnRect.height / 2
  const targetX = targetRect.left + targetRect.width / 2
  const targetY = targetRect.top + targetRect.height / 2

  const particleCount = Math.floor(Math.random() * 4) + 5

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
      position: 'fixed',
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
      if (particle.parentNode) particle.parentNode.removeChild(particle)
    }, duration + 50)
  }
}
