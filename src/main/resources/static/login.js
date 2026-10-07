document.addEventListener("DOMContentLoaded",()=>{
 document.getElementById("login-form").addEventListener("submit",e=>{e.preventDefault();const email=document.getElementById("login-email").value.trim(),password=document.getElementById("login-password").value,users=JSON.parse(localStorage.getItem("users")||"[]"),u=users.find(x=>x.email===email&&x.password===password);if(!u){alert("Invalid email or password.");return;}setCurrentUser({name:u.name,email:u.email,phone:u.phone||""});location.href="dashboard.html";});
});
