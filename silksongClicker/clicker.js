const body=document.querySelector("#body")
const button=document.querySelector("#black")
const hornetBtn = document.querySelector("#hornetBtn")

let hornetValue = 0
let multiplier = 1

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
  hornetValue+=multiplier
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
