document.addEventListener("DOMContentLoaded",renderCart);
function renderCart(){
 const cart=getCart(),items=document.getElementById("cart-items"),summary=document.getElementById("cart-summary");
 if(!cart.length){items.innerHTML='<div class="empty"><h2>Your cart is empty</h2><a class="btn" href="products.html">Explore Products</a></div>';summary.innerHTML="";return;}
 items.innerHTML=cart.map(p=>`<div class="cart-item"><img src="${p.image}" alt="${escapeHtml(p.name)}"><div><strong>${escapeHtml(p.name)}</strong><p class="muted">${escapeHtml(p.brand)}</p><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${p.quantity}</span><button onclick="changeQty(${p.id},1)">+</button></div></div><div><strong>${money(p.price*p.quantity)}</strong><br><button class="btn danger" style="margin-top:8px;padding:8px 10px" onclick="removeCartItem(${p.id})">Remove</button></div></div>`).join("");
 const sub=cart.reduce((s,p)=>s+p.price*p.quantity,0),ship=sub>=1000?0:50;
 summary.innerHTML=`<div class="card"><h2>Summary</h2><div class="summary-row"><span>Subtotal</span><strong>${money(sub)}</strong></div><div class="summary-row"><span>Shipping</span><strong>${ship?"₹50":"FREE"}</strong></div><div class="summary-row total"><span>Total</span><strong>${money(sub+ship)}</strong></div><a class="btn full-btn" href="checkout.html">Proceed to Checkout</a></div>`;
}
function changeQty(id,n){const c=getCart(),p=c.find(x=>x.id===id);if(!p)return;p.quantity+=n;if(p.quantity<=0)c.splice(c.indexOf(p),1);saveCart(c);renderNavbar();renderCart();}
function removeCartItem(id){saveCart(getCart().filter(x=>x.id!==id));renderNavbar();renderCart();}
