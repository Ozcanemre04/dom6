const prenom = document.querySelector('#firstname');

function liason(){
    const firstName = prenom.value; 
    document.querySelector("#display-firstname").innerHTML=firstName;
    
}
prenom.addEventListener('keyup',liason)

const age = document.querySelector("#age")
function  notAdult(){
    const displayedAge= age.value
    let hardTruth= document.querySelector('#a-hard-truth');
if(displayedAge < 18){
    hardTruth.style.visibility='visible'
}
else{
  hardTruth.style.visibility='hidden'
}
}

age.addEventListener('keyup',notAdult)

let password = document.querySelector('#pwd')
let confirmPassword = document.querySelector('#pwd-confirm');



function red(){
 let vl1 = password.value;
 let vl2 = confirmPassword.value
 if((vl1.length<6)){
     password.style.color = 'red'
     

 }
 else{
    password.style.color = 'black'
    


 }
 if(vl2.length<6 || vl2!==vl1){
     confirmPassword.style.color = 'red'
 }
 else{
     confirmPassword.style.color='black'
 }
}

password.addEventListener('keyup',red)
confirmPassword.addEventListener('keyup',red)



let body = document.querySelector("body")
let toggleDarkmode = document.querySelector("#toggle-darkmode")


toggleDarkmode.addEventListener('change',function(){
    let vl1 = toggleDarkmode.value;
    if(vl1 ==="dark"){
        body.style.backgroundColor='black'
        body.style.color = "white"
    }
    else{
        body.style.backgroundColor='white'
        body.style.color = "black"
    }
})