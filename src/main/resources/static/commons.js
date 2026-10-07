const API_BASE = "";

const PRODUCTS = [
{id:1,name:"Sony WH-1000XM5 Headphones",brand:"Sony",category:"Electronics",price:29999,oldPrice:34990,rating:4.8,stock:18,newest:20,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",description:"Premium wireless headphones with active noise cancellation and long battery life."},
{id:2,name:"Apple Watch Series 10",brand:"Apple",category:"Watches",price:46999,oldPrice:49900,rating:4.9,stock:12,newest:19,image:"https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=85",description:"A sleek smartwatch for fitness, notifications and everyday life."},
{id:3,name:"Casio Vintage Digital Watch",brand:"Casio",category:"Watches",price:3299,oldPrice:3995,rating:4.6,stock:35,newest:12,image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",description:"Classic digital styling with a timeless retro look."},
{id:4,name:"Floral Summer Dress",brand:"Zara",category:"Dresses",price:2499,oldPrice:3299,rating:4.5,stock:22,newest:18,image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",description:"Lightweight floral dress designed for a bright summer day."},
{id:5,name:"Satin Evening Dress",brand:"H&M",category:"Dresses",price:3999,oldPrice:4999,rating:4.7,stock:14,newest:17,image:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",description:"Elegant satin finish for parties and evening occasions."},
{id:6,name:"Hydrating Face Serum",brand:"The Ordinary",category:"Cosmetics",price:899,oldPrice:1099,rating:4.6,stock:45,newest:16,image:"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",description:"A lightweight skincare serum for a fresh hydrated look."},
{id:7,name:"Matte Lipstick Set",brand:"Maybelline",category:"Cosmetics",price:1299,oldPrice:1599,rating:4.5,stock:28,newest:15,image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",description:"Everyday shades with a smooth matte finish."},
{id:8,name:"Samsung Galaxy S25",brand:"Samsung",category:"Phones",price:74999,oldPrice:79999,rating:4.9,stock:10,newest:20,image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=85",description:"Flagship-style Android smartphone with a vibrant display."},
{id:9,name:"iPhone 16",brand:"Apple",category:"Phones",price:69999,oldPrice:79900,rating:4.9,stock:9,newest:19,image:"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=900&q=85",description:"Powerful smartphone with a premium build and advanced camera."},
{id:10,name:"Google Pixel 9",brand:"Google",category:"Phones",price:64999,oldPrice:79999,rating:4.8,stock:11,newest:18,image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",description:"Clean Android experience with smart photography features."},
{id:11,name:"MacBook Air M3",brand:"Apple",category:"Laptops",price:99999,oldPrice:114900,rating:4.9,stock:7,newest:20,image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85",description:"Thin, light laptop built for study, work and creative tasks."},
{id:12,name:"Dell Inspiron 14",brand:"Dell",category:"Laptops",price:62999,oldPrice:69999,rating:4.6,stock:15,newest:15,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",description:"Versatile everyday laptop for productivity and entertainment."},
{id:13,name:"ASUS ROG Gaming Laptop",brand:"ASUS",category:"Laptops",price:119999,oldPrice:134999,rating:4.8,stock:6,newest:17,image:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=85",description:"High-performance gaming laptop with powerful hardware."},
{id:14,name:"JBL Bluetooth Speaker",brand:"JBL",category:"Electronics",price:5999,oldPrice:6999,rating:4.7,stock:24,newest:14,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",description:"Portable wireless speaker with punchy sound."},
{id:15,name:"Logitech MX Master Mouse",brand:"Logitech",category:"Electronics",price:7499,oldPrice:8999,rating:4.8,stock:20,newest:13,image:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",description:"Comfortable productivity mouse with precision controls."},
{id:16,name:"Leather Analog Watch",brand:"Fossil",category:"Watches",price:8999,oldPrice:10995,rating:4.7,stock:17,newest:11,image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85",description:"Classic leather strap watch with a polished analog dial."},
{id:17,name:"Glow Makeup Kit",brand:"Lakme",category:"Cosmetics",price:1799,oldPrice:2199,rating:4.4,stock:31,newest:10,image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",description:"A compact collection of everyday makeup essentials."},
{id:18,name:"Oversized Casual Dress",brand:"Mango",category:"Dresses",price:2799,oldPrice:3499,rating:4.5,stock:19,newest:9,image:"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",description:"Relaxed oversized style made for casual everyday wear."},
{id:19,name:"Wireless Mechanical Keyboard",brand:"Keychron",category:"Electronics",price:8499,oldPrice:9999,rating:4.8,stock:16,newest:8,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",description:"Wireless mechanical keyboard for work, coding and gaming."},
{id:20,name:"OnePlus 13",brand:"OnePlus",category:"Phones",price:64999,oldPrice:69999,rating:4.8,stock:13,newest:16,image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",description:"Fast premium smartphone with a smooth display and strong performance."}
];

function getProducts(){return PRODUCTS.slice();}
function money(v){return "₹"+Number(v||0).toLocaleString("en-IN");}
function getCart(){return JSON.parse(localStorage.getItem("cart")||"[]");}
function saveCart(v){localStorage.setItem("cart",JSON.stringify(v));}
function getWishlist(){return JSON.parse(localStorage.getItem("wishlist")||"[]");}
function saveWishlist(v){localStorage.setItem("wishlist",JSON.stringify(v));}
function getOrders(){return JSON.parse(localStorage.getItem("orders")||"[]");}
function saveOrders(v){localStorage.setItem("orders",JSON.stringify(v));}
function getCurrentUser(){return JSON.parse(localStorage.getItem("currentUser")||"null");}
function setCurrentUser(v){localStorage.setItem("currentUser",JSON.stringify(v));}
function cartCount(){return getCart().reduce((s,p)=>s+Number(p.quantity||1),0);}
function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}

function renderNavbar(){
 const el=document.getElementById("navbar"); if(!el)return;
 const user=getCurrentUser();
 el.innerHTML=`<header class="navbar"><div class="nav-inner">
 <a class="brand" href="index.html">BAT-CART<span>.</span></a>
 <nav class="nav-links"><a href="index.html">Home</a><a href="products.html">Products</a><a href="wishlist.html">Wishlist</a><a href="orders.html">Orders</a></nav>
 <div class="nav-actions"><a class="cart-link" href="cart.html">🛒 <span id="cart-count">${cartCount()}</span></a>
 ${user?`<a class="login-link" href="dashboard.html">Hi, ${escapeHtml(user.name||"Account")}</a>`:`<a class="login-link" href="login.html">Login</a>`}
 </div></div></header>`;
}
function renderFooter(){
 const el=document.getElementById("footer"); if(!el)return;
 el.innerHTML=`<footer class="footer"><div class="footer-inner"><div><strong>BAT-CART</strong><p>A to Z products are available — even the non-alphabet products.</p></div><div><a href="products.html">Products</a>&nbsp;&nbsp; <a href="profile.html">Profile</a>&nbsp;&nbsp; <a href="orders.html">Orders</a></div></div></footer>`;
}

function productCard(product){
 const liked=getWishlist().some(p=>p.id===product.id);
 return `<article class="product-card">
 <div class="product-image-wrap"><a href="product-details.html?id=${product.id}"><img src="${product.image}" alt="${escapeHtml(product.name)}"></a>
 <button class="heart-btn" onclick="toggleWishlist(${product.id})">${liked?"♥":"♡"}</button></div>
 <div class="product-info"><div class="product-meta"><span class="muted">${escapeHtml(product.brand)}</span><span class="rating">★ ${product.rating}</span></div>
 <h3><a href="product-details.html?id=${product.id}" style="color:inherit">${escapeHtml(product.name)}</a></h3>
 <div><span class="price">${money(product.price)}</span> <span class="old-price">${money(product.oldPrice)}</span></div>
 <div class="product-buttons"><button class="btn" onclick="addProductToCart(${product.id})">Add to Cart</button><button class="btn secondary" onclick="viewProduct(${product.id})">View</button></div>
 </div></article>`;
}
function addProductToCart(id){
 const p=getProducts().find(x=>x.id===id); if(!p)return;
 const cart=getCart(); const existing=cart.find(x=>x.id===id);
 if(existing)existing.quantity++; else cart.push({...p,quantity:1});
 saveCart(cart); renderNavbar(); toast("Added to cart");
}
function toggleWishlist(id){
 const p=getProducts().find(x=>x.id===id); if(!p)return;
 const list=getWishlist(); const i=list.findIndex(x=>x.id===id);
 if(i>=0){list.splice(i,1);toast("Removed from wishlist");}else{list.push(p);toast("Added to wishlist");}
 saveWishlist(list); renderNavbar();
 const grid=document.getElementById("products-grid"); if(grid && typeof renderProducts==="function")renderProducts();
 const feature=document.getElementById("featured-products"); if(feature && typeof renderFeatured==="function")renderFeatured();
}
function viewProduct(id){location.href="product-details.html?id="+id;}
function toast(message){
 let t=document.getElementById("toast");
 if(!t){t=document.createElement("div");t.id="toast";document.body.appendChild(t);}
 t.textContent=message;t.classList.add("show");clearTimeout(window.__toast);
 window.__toast=setTimeout(()=>t.classList.remove("show"),1600);
}
document.addEventListener("DOMContentLoaded",()=>{renderNavbar();renderFooter();});
