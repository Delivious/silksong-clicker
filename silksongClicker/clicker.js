const rebirthBtnToRebirth = document.querySelector("#rebirthBtnToRebirth")
const skill1 = document.querySelector("#skill1")
const skill2 = document.querySelector("#skill2")
const skill3 = document.querySelector("#skill3")
const skill4 = document.querySelector("#skill4")
const rebirthTokensText = document.querySelector("#rebirthTokensText")
const lighttool=document.querySelector("#lighttool")
const hornetBtn = document.querySelector("#hornetBtn1")
const hornetPara = document.querySelector("#hornetVal")
const paleOil = document.querySelector("#paleOil")
const sharpen=document.querySelector("#sharpen")
const rpsText=document.querySelector("#rps")
const body=document.querySelector("#body")
const modeForm = document.querySelector("#modeForm")
const upg1Desc=document.querySelector("#upg1Desc")
const upg2Desc=document.querySelector("#upg2Desc")
const upg3Desc=document.querySelector("#upg3Desc")
const upg4Desc=document.querySelector("#upg4Desc")
const upg5Desc=document.querySelector("#upg5Desc")
const upg6Desc=document.querySelector("#upg6Desc")
const upg7Desc=document.querySelector("#upg7Desc")
const upg8Desc=document.querySelector("#upg8Desc")
const upg9Desc=document.querySelector("#upg9Desc")
const upg10Desc=document.querySelector("#upg10Desc")
const upg11Desc=document.querySelector("#upg11Desc")
const bossArenaMain = document.querySelector("#bossArenaMain")
const upgradeContainer=document.querySelector("#upgradeContainer")
const bossArena = document.querySelector("#bossArena")
const arenaBtn = document.querySelector("#arenaBtn")
const threefoldBtn=document.querySelector("#threefold")
const upg2 = document.querySelector("#upg2")
const upg1 = document.getElementById("upg1");
const upg1Img = document.querySelector("#upg1 img");
const upg4 = document.querySelector("#upg4")
const upg3 = document.querySelector("#upg3")
const upg5 = document.querySelector("#upg5")
const upg6 = document.querySelector("#upg6")
const upg7 = document.querySelector("#upg7")
const upg8 = document.querySelector("#upg8")
const upg9 = document.querySelector("#upg9")
const upg10 = document.querySelector("#upg10")
const upg11 = document.querySelector("#upg11")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
const btn9 = document.querySelector("#btn9")
const rebirthBtn = document.querySelector("#rebirthBtn")
const rebirthMenu = document.querySelector("#rebirthMenu")
const rebirthTree = document.querySelector("#rebirthTree")
const character = document.querySelector("#character")
const soundList = ["assets/deeperren.mp3", "assets/gauruma.mp3", "assets/haaa.mp3", "assets/hegale.mp3", "assets/hornet_edino.mp3", "assets/hornet_gitgud.mp3", "assets/ren.mp3", "assets/shaw.mp3"]
const btnList = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, hornetBtn, btn9]
const upgList = [upg1, upg2, upg3, upg4, upg5, upg6, upg7, upg8, upg9, upg10, upg11]
const upgChildren = [upg1Desc, upg2Desc, upg3Desc, upg4Desc, upg5Desc, upg6Desc, upg7Desc, upg8Desc, upg9Desc, upg10Desc, upg11Desc]
const skillList = [skill1, skill2, skill3, skill4]
const skillChildren = [skill1Desc, skill2Desc, skill3Desc, skill4Desc]
let roseValue = 100000000000
let multiplier = 1
let sharpenMultiplier = 1
let distance = 0
let hornetBtnNew = null
let distanceX=0
let displayMenu = false
let bossHealth = 0
let throwerCost = 50
let thrower=null
let throwerCount=0
let purchase1 = false
let purchase2 = false
let purchase3 = false
let purchase4 = false
let purchase5 = false
let sharpCost=200
let sharp=null
let sharpCount=0
let bought1 = false
let bought2 = false
let bought3 = false
let bought4 = false
let rpsCounter = 0
let rps = 0
let paleOilCost = 3000
let paleOilCount = 0
let rpsSubtract = 0
let skill1Cost = 3
let skill2Cost = 5
let skill3Cost = 5
let skill4Cost = 7
let threefoldCost = 750
let threefold=null
let threefoldCount=0
let rebirthMultiplier = 1
let rebirthCount=0
let rebirthTokens=0
let rebirthCost=100000
const keys = {}
let x = 0
let y = 0
let rpsPercent = 0
let rpsRebirth = 0
let moveX = 0
let moveY = 0
let velocityY = 0
let onGround = true
let left = false
let right = true
let moving = false
let noiseMode = false
let move = null
let charPos = 0
let clickcost=500
let lofiBeat = null
let canPlay = true
document.addEventListener("mousedown",()=>{
  if (canPlay){
    canPlay=false
    setTimeout(()=>{
      lofiBeat = (new Audio("assets/silkMusic.mp3")).play()
    },1)
  }
  setInterval(()=>{
      if (canPlay){
        canPlay=false
        setTimeout(()=>{
          lofiBeat = (new Audio("assets/silkMusic.mp3")).play()
        },1)
        setTimeout(()=>{
          canPlay=true
        },158000)
      }
  },158000)
})
let rpsPrevious = 0
const arenaRect = bossArenaMain.getBoundingClientRect()
const maxX = arenaRect.right 
const minX = arenaRect.left
function rebirth(){
  if(roseValue >= rebirthCost){
    roseValue-=rebirthCost
    roseValue = 100000000000
    multiplier = 1
    sharpenMultiplier = 1
    distance = 0
    if (hornetBtn) hornetBtn.style.display = "none";
    if (hornetBtnNew) hornetBtnNew.style.display = "none";
    hornetBtnNew = null
    hornetBtn.style.display = "block"
    distanceX=0
    displayMenu = false
    throwerCost = 50
    throwerCount=0
    purchase1 = false
    purchase2 = false
    purchase3 = false
    upg1.style.display = "block"
    upg1Img.src = "assets/mouse1.png"
    upg2.style.display = "block"
    upg3.style.display = "block"
    upg4.style.display = "block"
    upg5.style.display = "block"
    upg6.style.display = "block"
    upg7.style.display = "block"
    upg8.style.display = "block"
    upg9.style.display = "block"
    upg10.style.display = "block"
    upg11.style.display = "block"
    sharpCost=200
    sharpCount=0
    rpsCounter = 0
    rps = 0
    rpsPercent = 0
    rpsSubtract = 0
    threefoldCost = 750
    threefoldCount=0
    rebirthCount+=1
    rebirthTokens+=10
    clearInterval(thrower)
    paleOilCost = 3000
    paleOilCount = 0
    clearInterval(sharp)
    clearInterval(threefold)
    thrower = null
    sharp = null
    threefold = null
    rebirthCost=rebirthCost*2.5
    rebirthBtnToRebirth.textContent = `Rebirth for ${rebirthCost} Rosaries`
    sharpen.textContent = `Get your Nail to slash attack the button for ${5*sharpenMultiplier} Rosaries a second! Cost: ${sharpCost} Rosaries`
    lighttool.textContent = `Get a Light Throwing Tool that gets you 1 Rosarie per second! Cost: ${throwerCost} Rosaries`
    threefoldBtn.textContent = `Get your Threefold Pin and throw pins at the button for 15 Rosaries a second! Cost: ${threefoldCost} Rosaries`
    if (rebirthCount >= 1){
      paleOil.style.display = "block"
    }
  }
}
rebirthBtnToRebirth.addEventListener("click",rebirth)
sharpen.addEventListener("click",sharpened)
hornetBtn.addEventListener("click",addValue)
lighttool.addEventListener("click",throwy)
threefoldBtn.addEventListener("click",threefoldfunc)
paleOil.addEventListener("click",paleOilFunc)
modeForm.addEventListener("change",(c)=>{
  if (c.target.value == "ButtonNoise"){
    noiseMode=true
  }
  else{
    noiseMode=false
  }
})
btn1.addEventListener("click",addValue)
btn2.addEventListener("click",addValue)
btn3.addEventListener("click",addValue)
btn4.addEventListener("click",addValue)
btn5.addEventListener("click",addValue)
btn6.addEventListener("click",addValue)
btn7.addEventListener("click",addValue)
btn8.addEventListener("click",addValue)
btn9.addEventListener("click",addValue)
setInterval(()=>{
  hornetPara.textContent =  `Rosaries: ${roseValue}`
},100)
skill1.addEventListener("click",()=>{
  if(rebirthTokens>=skill1Cost){
    if(!bought1){  
      rebirthTokens-=skill1Cost
      rebirthMultiplier=rebirthMultiplier*2
      bought1 = true
      skill1.style.backgroundColor = "green"
    }
  }
})
skill2.addEventListener("click",()=>{
  if(rebirthTokens>=skill2Cost && bought1){
  if(!bought2){   
      rebirthTokens-=skill2Cost
      rebirthMultiplier=rebirthMultiplier*2
      bought2 = true
      skill2.style.backgroundColor = "green"
    }
  }
})
skill3.addEventListener("click",()=>{
  if(rebirthTokens>=skill3Cost && bought1){
    if(!bought3){  
      rebirthTokens-=skill3Cost
      rpsRebirth+=0.01
      bought3 = true
      skill3.style.backgroundColor = "green"
    }
  }
})
skill4.addEventListener("click",()=>{
  if(rebirthTokens>=skill4Cost && bought3){
    if (!bought4){
      rebirthTokens-=skill4Cost
      rebirthMultiplier=rebirthMultiplier*2
      bought4 = true
      skill4.style.backgroundColor = "green"
  
    }  
  }
})
document.addEventListener("keydown", (e)=>{
  keys[e.key] = true
})

document.addEventListener("keyup", (e)=>{
  keys[e.key] = false
})
arenaBtn.addEventListener("click", ()=>{
  const display = getComputedStyle(bossArena).display
  if (display == "none"){
    bossArena.style.display = "block"
    bossArenaMain.style.display = "block"
    character.style.display = "block"
    bossFight()
  }
  else if(bossHealth <= 0){
    bossArena.style.display = "none"
    bossArenaMain.style.display = "none"
    character.style.display = "none"
    clearInterval(move)
  }
})
rebirthBtn.addEventListener("click", () => {
  const displayMenu = (getComputedStyle(rebirthMenu).display == "none")
  if (displayMenu){
    rebirthMenu.style.display = "flex"
    rebirthTree.style.display = "flex"
    rebirtheTokenInt = setInterval(()=>{
      rebirthTokensText.textContent = `Rebirth Tokens: ${rebirthTokens}`
    },100)
  } 
  else {
    rebirthMenu.style.display = "none"
    rebirthTree.style.display = "none"
    clearInterval(rebirthTokenInt)
  }
})
upgList.forEach((el, idx) => {
  if (!el) return
  el.addEventListener('mouseenter', () => {
    upgChildren[idx].style.display = 'block'
  })
  el.addEventListener('mouseleave', () => {
    upgChildren[idx].style.display = 'none'
  })
})
skillList.forEach((el, idx) => {
  if (!el) return
  el.addEventListener('mouseenter', () => {
    skillChildren[idx].style.display = 'block'
  })
  el.addEventListener('mouseleave', () => {
    skillChildren[idx].style.display = 'none'
  })
})
addEventListener("keydown",(e)=>{
  if (e.code=="Space"){
    e.preventDefault()
    addValue()
  }
})
upg1.addEventListener("click", () => {

  if (roseValue >= clickcost && !purchase1) {
    roseValue -= clickcost
    upg1Img.src = "assets/mouse2.png"
    multiplier *= 2
    purchase1 = true
    clickcost *=2
  }

  else if (roseValue >= clickcost && !purchase2) {
    roseValue -= clickcost
    upg1Img.src = "assets/mouse3.png"
    multiplier *= 2
    purchase2 = true
    clickcost *=2
  }

  else if (roseValue >= clickcost && !purchase3) {
    roseValue -= clickcost
    upg1Img.src = "assets/mouse4.png"
    multiplier *= 2
    purchase3 = true
    clickcost *=2
  }

  else if (roseValue >= clickcost && !purchase4) {
    roseValue -= clickcost
    upg1Img.src = "assets/mouse5.png"
    multiplier *= 2
    purchase4 = true
    clickcost *=2
  }
  else if (roseValue >= clickcost && !purchase5) {
    roseValue -= clickcost
    upg1Img.src = "assets/mouse6.png"
    multiplier *= 2
    purchase5 = true
    clickcost *=2
  }

  else if (roseValue >= clickcost && purchase5) {
    roseValue -= clickcost
    upg1.style.display = "none"
    multiplier *= 2
  }

})
upg2.addEventListener("click", () => {
  if (roseValue >= 1000) {
    roseValue -= 1000
    upg2.style.display = "none"
    sharpenMultiplier+=1
    sharpen.textContent = `Get your Nail to slash attack the button for ${5*sharpenMultiplier} Rosaries a second! Cost: ${sharpCost} Rosaries`
  }
})
upg4.addEventListener("click", () => {
  if (roseValue >= 2500) {
    roseValue -= 2500
    upg4.style.display = "none"
    multiplier+=1
    
  }
})
setInterval(()=>{
  rpsText.textContent=`Your RPS is: ${rps}`
  rpsPrevious = rps
  rps=0
},1000)
function colorchange(){
  if (body.style.backgroundColor!="black"){
    body.style.backgroundColor="black"
  }
  else{
    body.style.backgroundColor="white"
  }
  
}
let currentSprite = "";

// prevents reloading same image every frame
function setSprite(src){
  if(currentSprite !== src){
    character.src = src;
    currentSprite = src;
  }
}

function bossFight(){
  move = setInterval(()=>{

    moving = false; // reset every frame

    if(keys["a"]){
      x -= moveX;
      left = true;
      right = false;
      moving = true;
    }

    if(keys["d"]) {
      x += moveX;
      left = false;
      right = true;
      moving = true;
    }

    if (keys["e"]){
      character.style.transform = `translate(${x}px, ${y}px) scale(1.5)`
      setTimeout(() => {
        character.style.transform = `translate(${x}px, ${y}px) scale(1)`
      }, 500);
    }

    if(keys["w"] && onGround){
      velocityY = -20;
      onGround = false;
    }

    velocityY += 1;
    y += velocityY;

    if(y > 0){
      y = 0;
      velocityY = 0;
      onGround = true;
    }

    // SPEED CONTROL
    if (moving){
      moveX += 1;
      if (moveX >= 4){
        moveX = 4;
      }
    } else {
      moveX -= 1;
      if (moveX <= 0){
        moveX = 0;
      }
    }

    // 🎯 SPRITE LOGIC
    if (moving) {
      if (right) {
        setSprite("assets/walkingright.gif");
      } else if (left) {
        setSprite("assets/walkingleft.gif");
      }
    } else {
      if (right) {
        setSprite("assets/facingright.png");
      } else if (left) {
        setSprite("assets/facingleft.png");
      }
    }

    // APPLY POSITION
    character.style.transform = `translate(${x}px, ${y}px)`;

  },16);
}

function addValue(){
  // spawn before we hide/swap the button so particles originate from
  // the image the user actually clicked
  spawnParticles()
  if (rebirthCount == 0){
    roseValue+=multiplier*rebirthMultiplier + Math.floor(((rpsRebirth + rpsPercent) * rpsPrevious))
  }
  else{
   roseValue+=multiplier * rebirthMultiplier + Math.floor(((rpsRebirth + rpsPercent) * rpsPrevious))
  }
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
  if (noiseMode){
    randomHorn = soundList[Math.floor(Math.random()*(soundList.length))]
    audioHorn = new Audio(src=randomHorn)
    audioHorn.play()
  }
}

function spawnParticles() {
  const activeButton = hornetBtnNew || hornetBtn
  const btnRect = activeButton.getBoundingClientRect()
  const targetRect = hornetPara.getBoundingClientRect()

  const startX = btnRect.left + window.scrollX + btnRect.width / 2
  const startY = btnRect.top + window.scrollY + btnRect.height / 2
  const targetX = targetRect.left + window.scrollX + targetRect.width / 2
  const targetY = targetRect.top + window.scrollY + targetRect.height / 2 - 50

  let particleCount = 1*multiplier
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
      transform: `translate(0,0) scale(1)`,
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
      particle.style.transform = `translate(${targetX},${targetY}) scale(0.4)`
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
        roseValue += throwerCount + ((paleOilCount * 3)*throwerCount)
        rps += throwerCount + ((paleOilCount * 3)*throwerCount)
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
        roseValue += (5*sharpCount) * sharpenMultiplier + ((paleOilCount * 3)*sharpCount)
        rps += (5*sharpCount)*sharpenMultiplier + ((paleOilCount * 3)*sharpCount)
      },1000)
    }

    sharpCount += 1
    roseValue -= sharpCost
    sharpCost = Math.trunc(sharpCost * 1.1)

    sharpen.textContent =
      `Get your Nail to slash attack the button for ${5*sharpenMultiplier} Rosaries a second! Cost: ${sharpCost} Rosaries`
  }
}
function threefoldfunc(){
  if (roseValue >= threefoldCost){

    if(!threefold){
      threefold = setInterval(() =>{
        roseValue += 5*threefoldCount + (((paleOilCount * 1)*threefoldCount))
        rps += 5*threefoldCount + (((paleOilCount * 1)*threefoldCount))
      },333)
    }

    threefoldCount += 1
    roseValue -= threefoldCost
    threefoldCost = Math.trunc(threefoldCost * 1.1)

    threefoldBtn.textContent = `Get your Threefold Pin and throw pins at the button for 15 Rosaries a second! Cost: ${threefoldCost} Rosaries`
  }
}
function paleOilFunc(){
  if (roseValue >= paleOilCost){
    paleOilCount += 1
    roseValue -= paleOilCost
    paleOilCost = Math.trunc(paleOilCost * 1.65)

    paleOil.textContent = `Get your Pale Oil to *BUFF* every one of your tools by +3 Rosaries! Cost: ${paleOilCost} Rosaries`
  }
}
