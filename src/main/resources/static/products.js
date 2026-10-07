let filteredProducts=[];
document.addEventListener("DOMContentLoaded",()=>{
 const products=getProducts();
 const categories=[...new Set(products.map(p=>p.category))].sort();
 const brands=[...new Set(products.map(p=>p.brand))].sort();
 document.getElementById("category-filter").innerHTML='<option value="">All categories</option>'+categories.map(x=>`<option>${escapeHtml(x)}</option>`).join("");
 document.getElementById("brand-filter").innerHTML='<option value="">All brands</option>'+brands.map(x=>`<option>${escapeHtml(x)}</option>`).join("");

 ["search-input","category-filter","brand-filter","price-filter","sort-select"].forEach(id=>{
   document.getElementById(id).addEventListener(id==="search-input"?"input":"change",renderProducts);
 });
 document.getElementById("clear-search").onclick=()=>{document.getElementById("search-input").value="";renderProducts();};
 document.getElementById("reset-filters").onclick=resetProductFilters;

 const q=new URLSearchParams(location.search);
 const category=q.get("category");
 if(category && categories.includes(category))document.getElementById("category-filter").value=category;
 renderProducts();
});
function renderProducts(){
 let p=getProducts();
 const q=document.getElementById("search-input").value.trim().toLowerCase();
 const cat=document.getElementById("category-filter").value;
 const brand=document.getElementById("brand-filter").value;
 const price=document.getElementById("price-filter").value;
 const sort=document.getElementById("sort-select").value;

 if(q)p=p.filter(x=>[x.name,x.brand,x.category,x.description].some(v=>v.toLowerCase().includes(q)));
 if(cat)p=p.filter(x=>x.category===cat);
 if(brand)p=p.filter(x=>x.brand===brand);
 if(price){const [min,max]=price.split("-").map(Number);p=p.filter(x=>x.price>=min&&x.price<=max);}
 if(sort==="price-low")p.sort((a,b)=>a.price-b.price);
 else if(sort==="price-high")p.sort((a,b)=>b.price-a.price);
 else if(sort==="name-az")p.sort((a,b)=>a.name.localeCompare(b.name));
 else if(sort==="name-za")p.sort((a,b)=>b.name.localeCompare(a.name));
 else if(sort==="rating")p.sort((a,b)=>b.rating-a.rating);
 else if(sort==="newest")p.sort((a,b)=>b.newest-a.newest);
 else p.sort((a,b)=>b.rating-a.rating);

 filteredProducts=p;
 const grid=document.getElementById("products-grid"),empty=document.getElementById("products-empty");
 grid.innerHTML=p.map(productCard).join("");
 empty.classList.toggle("hidden",p.length>0);
 document.getElementById("result-count").textContent=`${p.length} of ${getProducts().length} products`;
 renderActiveFilters();
}
function renderActiveFilters(){
 const box=document.getElementById("active-filters");const chips=[];
 const q=document.getElementById("search-input").value.trim();
 const cat=document.getElementById("category-filter").value;
 const brand=document.getElementById("brand-filter").value;
 const price=document.getElementById("price-filter").value;
 if(q)chips.push(`Search: ${escapeHtml(q)}`);
 if(cat)chips.push(cat);if(brand)chips.push(brand);if(price)chips.push(document.getElementById("price-filter").selectedOptions[0].text);
 box.innerHTML=chips.map(x=>`<span class="chip">${x}</span>`).join("");
}
function resetProductFilters(){
 document.getElementById("search-input").value="";
 document.getElementById("category-filter").value="";
 document.getElementById("brand-filter").value="";
 document.getElementById("price-filter").value="";
 document.getElementById("sort-select").value="featured";
 renderProducts();
}
