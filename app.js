const signup_old=document.querySelector(".signup_pag")
const singup_btn=document.querySelector(".signup_button")
singup_btn.addEventListener("click",()=>{
    signup_old.classList.toggle("signup_page")
    console.log("work more")
})
const close_signup=document.querySelector(".bi-x-lg")
close_signup.addEventListener("click",()=>{
    signup_old.classList.toggle("signup_page")
})

const login_old=document.querySelector(".login_pag")
const log_in_button=document.querySelector(".log_in_button")

log_in_button.addEventListener("click",()=>{
    login_old.classList.toggle("login_page")
    console.log("work more")
})
const close_login=document.querySelector(".close_login")
close_login.addEventListener("click",()=>{
    login_old.classList.toggle("login_page")
})
//--------------------------------foodtype-next-button----------------------------------------------------------
const food_type_next=document.querySelector(".sec_next_button")
const food_type_div=document.querySelectorAll(".food_type_div")
let mk=0;
let limit=7;


food_type_next.addEventListener("click",()=>{
    mk=mk-180;
    if(mk<=-560){
        food_type_next.style.display="none";
        console.log(mk)
    }else{
        food_type_next.style.display="flex";
        limit++
    }
    for(i of food_type_div){
        i.style.transform=`translateX(${mk}px)`
        i.style.transition="linear 1s"
    }


        sec_pre_button.style.display="flex";
    
    
})
//-----------------------------------foodtype-privious-button---------------------------------------------------
const sec_pre_button=document.querySelector(".sec_pre_button")

sec_pre_button.style.display="none";

sec_pre_button.addEventListener("click",()=>{
    mk=mk+180;

    console.log(mk)
    
    for(i of food_type_div){
        i.style.transform=`translateX(${mk}px)`
    }

    console.log(mk)
    if(mk>=-1){
        sec_pre_button.style.display="none";
    }else{
        sec_pre_button.style.display="flex";
    }
    food_type_next.style.display="flex";
})

// ------------------------------------------------card-section---------------------------------------------
const sec_card=document.querySelectorAll(".sec_card")
for(card of sec_card){
    card.addEventListener("click",()=>{
        alert("work is beaing proccessed!!")
    })
}

