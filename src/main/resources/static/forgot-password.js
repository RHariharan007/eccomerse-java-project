document.addEventListener("DOMContentLoaded",()=>{
 document.getElementById("forgot-form").addEventListener("submit",e=>{e.preventDefault();const email=document.getElementById("forgot-email").value.trim(),users=JSON.parse(localStorage.getItem("users")||"[]");if(!users.some(x=>x.email===email)){alert("No account found with this email.");return;}localStorage.setItem("resetEmail",email);location.href="reset-password.html";});
});
