document.addEventListener("DOMContentLoaded",()=>{
 renderFeatured();
});
function renderFeatured(){
 const el=document.getElementById("featured-products");if(!el)return;
 el.innerHTML=getProducts().sort((a,b)=>b.rating-a.rating).slice(0,4).map(productCard).join("");
}
