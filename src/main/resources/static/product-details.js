document.addEventListener("DOMContentLoaded",()=>{
 const id=Number(new URLSearchParams(location.search).get("id"));
 const p=getProducts().find(x=>x.id===id),el=document.getElementById("product-details");
 if(!p){el.innerHTML='<div class="empty"><h2>Product not found</h2><a class="btn" href="products.html">Back to Products</a></div>';return;}
 const liked=getWishlist().some(x=>x.id===id);
 el.innerHTML=`<div class="checkout-layout">
 <div class="card"><img src="${p.image}" alt="${escapeHtml(p.name)}" style="width:100%;max-height:550px;object-fit:cover;border-radius:12px"></div>
 <div class="card"><span class="eyebrow dark">${escapeHtml(p.category)}</span><h1>${escapeHtml(p.name)}</h1>
 <p class="muted">${escapeHtml(p.brand)} • ★ ${p.rating} • ${p.stock} in stock</p>
 <p><span class="price">${money(p.price)}</span> <span class="old-price">${money(p.oldPrice)}</span></p>
 <p style="line-height:1.7">${escapeHtml(p.description)}</p>
 <div class="product-buttons"><button id="detail-cart" class="btn">Add to Cart</button><button id="detail-wish" class="btn secondary">${liked?"♥ Saved":"♡ Wishlist"}</button></div>
 </div></div>`;
 document.getElementById("detail-cart").onclick=()=>addProductToCart(id);
 document.getElementById("detail-wish").onclick=()=>toggleWishlist(id);
});
