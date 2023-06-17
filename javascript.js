const menu=document.querySelector("#menu")
const menu_btn=document.querySelector("#menu_button")
const close_menu=document.querySelector("#close_menu")
menu_btn.addEventListener("click",()=>{
    menu.classList.remove("old_menu")
    menu.classList.add("menu")

})
close_menu.addEventListener("click",()=>{
    
    menu.classList.remove("menu")
    menu.classList.add("old_menu")
})
const signup_old=document.querySelector(".signup_pag")
const singup_btn=document.querySelector(".signup_button")
const singup=document.querySelector(".signup_btn")
singup_btn.addEventListener("click",()=>{
    signup_old.classList.toggle("signup_page")
    console.log("work more")
})
singup.addEventListener("click",()=>{
    signup_old.classList.toggle("signup_page")
    console.log("work more")
})
const close_signup=document.querySelector(".bi-x-lg")
close_signup.addEventListener("click",()=>{
    signup_old.classList.toggle("signup_page")
})
console.log(signup_old)

const login_old=document.querySelector(".login_pag")
const log_in_button=document.querySelector(".log_in_button")

log_in_button.addEventListener("click",()=>{
    login_old.classList.toggle("login_page")
    console.log("work more")
})
const logIn_button=document.querySelector(".log_in_button2")

logIn_button.addEventListener("click",()=>{
    login_old.classList.toggle("login_page")
    console.log("work more")
})
const close_login=document.querySelector(".close_login")
close_login.addEventListener("click",()=>{
    login_old.classList.toggle("login_page")
})