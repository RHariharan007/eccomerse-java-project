document.addEventListener("DOMContentLoaded",()=>{
 const u=getCurrentUser();if(!u){location.href="login.html";return;}
 document.getElementById("profile-name").value=u.name||"";document.getElementById("profile-email").value=u.email||"";document.getElementById("profile-phone").value=u.phone||"";
 document.getElementById("profile-form").addEventListener("submit",e=>{e.preventDefault();u.name=document.getElementById("profile-name").value.trim();u.email=document.getElementById("profile-email").value.trim();u.phone=document.getElementById("profile-phone").value.trim();setCurrentUser(u);alert("Profile saved.");renderNavbar();});
 document.getElementById("logout-btn").onclick=()=>{localStorage.removeItem("currentUser");location.href="index.html";};
});
