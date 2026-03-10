const body=document.querySelector("#body")
const button=document.querySelector("#black")

button.addEventListener("click",colorchange)

function colorchange(){
  if (body.style.backgroundColor!="black"){
    body.style.backgroundColor="black"
  }
  else{
    body.style.backgroundColor="white"
  }
  
}