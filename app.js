const btn= document.querySelectorAll(".btn");
const result= document.querySelector(".output");
let digit = 0;

btn.forEach( function(btn){
  btn.addEventListener("click",function(e){
    const styles=e.currentTarget.classList
    if (styles.contains("increase")){
       digit++;
    }else if(styles.contains("decrease")){
        digit--;
    }else{
        digit= 0
    }if(digit > 0){
        result.style.color="green"
    }if(digit < 0){
        result.style.color="red"
    }else if(digit === 0){
        result.style.color="blue" 
    }
    result.textContent = digit
  })
})