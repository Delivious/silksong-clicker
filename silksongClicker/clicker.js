
const lighttool=document.querySelector("#lighttool")
const hornetBtn = document.querySelector("#hornetBtn1")
const hornetPara = document.querySelector("#hornetVal")
const sharpen=document.querySelector("#sharpen")
const rpsText=document.querySelector("#rps")
const body=document.querySelector("#body")
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

const upgradeContainer=document.querySelector("#upgradeContainer")

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
const rebirthBtn = document.querySelector("#rebirthBtn")
const rebirthMenu = document.querySelector("#rebirthMenu")
const rebirthTree = document.querySelector("#rebirthTree")


const soundList = ["assets/deeperren.mp3", "assets/gauruma.mp3", "assets/haaa.mp3", "assets/hegale.mp3", "assets/hornet_edino.mp3", "assets/hornet_gitgud.mp3", "assets/ren.mp3", "assets/shaw.mp3"]
const btnList = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, hornetBtn]
const upgList = [upg1, upg2, upg3, upg4, upg5, upg6, upg7, upg8, upg9, upg10, upg11]

// API helper functions
const API_BASE = (window.location.protocol === "file:" || window.location.origin === "null")
  ? "http://localhost:3000"
  : window.location.origin;

async function postJson(path, body) {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res;
  } catch (err) {
    console.error("Network error:", err);
    throw err;
  }
}

async function getJson(path) {
  try {
    const res = await fetch(`${API_BASE}${path}`);
    return res;
  } catch (err) {
    console.error("Network error:", err);
    throw err;
  }
}

// Load user data on page load
async function loadUserData() {
  const username = localStorage.getItem('username');
  if (!username) return; // Not logged in

  try {
    const res = await getJson(`/api/user-data/${username}`);
    const data = await res.json();
    if (res.ok) {
      // Load saved data
      roseValue = data.roseValue || 10000000;
      multiplier = data.multiplier || 1;
      throwerCount = data.throwerCount || 0;
      sharpCount = data.sharpCount || 0;
      threefoldCount = data.threefoldCount || 0;
      throwerCost = data.throwerCost || 50;
      sharpCost = data.sharpCost || 200;
      threefoldCost = data.threefoldCost || 750;

      // Update UI
      hornetPara.textContent = `Rosaries: ${roseValue}`;
      lighttool.textContent = `Get a Light Throwing Tool that gets you 1 Rosarie per second! Cost: ${throwerCost} Rosaries`;
      sharpen.textContent = `Get your Nail to slash attack the button for 5 Rosaries a second! Cost: ${sharpCost} Rosaries`;
      threefoldBtn.textContent = `Get your Threefold Pin and throw pins at the button for 15 Rosaries a second! Cost: ${threefoldCost} Rosaries`;

      console.log('User data loaded successfully');
    }
  } catch (error) {
    console.error('Failed to load user data:', error);
  }
}

// Save user data
async function saveUserData() {
  const username = localStorage.getItem('username');
  if (!username) return; // Not logged in

  const gameData = {
    roseValue,
    multiplier,
    throwerCount,
    sharpCount,
    threefoldCount,
    throwerCost,
    sharpCost,
    threefoldCost
  };

  try {
    const res = await postJson('/api/save-data', { username, gameData });
    if (res.ok) {
      console.log('Game data saved');
    }
  } catch (error) {
    console.error('Failed to save game data:', error);
  }
}

// Load data when page loads
window.addEventListener('load', loadUserData);

// Auto-save every 30 seconds
setInterval(saveUserData, 30000);

// Check login status and show/hide buttons
function checkLoginStatus() {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  const username = localStorage.getItem('username');

  const loginBtn = document.getElementById('createUserAndLogin');
  const saveBtn = document.getElementById('saveBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loggedIn && username) {
    loginBtn.style.display = 'none';
    saveBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'inline-block';
    console.log(`Logged in as: ${username}`);
  } else {
    loginBtn.style.display = 'inline-block';
    saveBtn.style.display = 'none';
    logoutBtn.style.display = 'none';
  }
}

// Check login status when page loads
window.addEventListener('load', () => {
  checkLoginStatus();
  loadUserData();

  // Add event listeners for save and logout (DOM is ready now)
  document.getElementById('saveBtn').addEventListener('click', async () => {
    await saveUserData();
    alert('Game saved!');
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn');
    location.reload(); // Refresh page
  });
});
const upgChildren = [upg1Desc, upg2Desc, upg3Desc, upg4Desc, upg5Desc, upg6Desc, upg7Desc, upg8Desc, upg9Desc, upg10Desc, upg11Desc]
let roseValue = 10000000
let multiplier = 1
let sharpenMultiplier = 1
let distance = 0
let hornetBtnNew = null
let distanceX=0
let displayMenu = false

let throwerCost = 50
let thrower=null
let throwerCount=0
let purchase1 = false
let purchase2 = false
let purchase3 = false
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
rebirthBtn.addEventListener("click", () => {
  if (!displayMenu){
    rebirthMenu.style.display = "none"
    rebirthTree.style.display = "none"
    displayMenu = true
  } 
  else {
    rebirthMenu.style.display = "flex"
    rebirthTree.style.display = "flex"
    displayMenu = false
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
addEventListener("keydown",(e)=>{
  if (e.code=="Space"){
    e.preventDefault()
    addValue()
  }
})
upg1.addEventListener("click", () => {

  if (roseValue >= 500 && !purchase1) {
    roseValue -= 500
    upg1Img.src = "assets/mouse2.png"
    multiplier *= 2
    purchase1 = true
  }

  else if (roseValue >= 1000 && !purchase2) {
    roseValue -= 1000
    upg1Img.src = "assets/mouse3.png"
    multiplier *= 2
    purchase2 = true
  }

  else if (roseValue >= 2500 && !purchase3) {
    roseValue -= 2500
    upg1Img.src = "assets/mouse4.png"
    multiplier *= 2
    purchase3 = true
  }

  else if (roseValue >= 5000 && purchase3) {
    roseValue -= 5000
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
        roseValue += (1*sharpCount)*sharpenMultiplier
        rps += (1*sharpCount)*sharpenMultiplier
      },200)
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