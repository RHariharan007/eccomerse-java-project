document.addEventListener("DOMContentLoaded",()=>{
 const cart=getCart();if(!cart.length){location.href="cart.html";return;}
 const u=getCurrentUser(),a=JSON.parse(localStorage.getItem("address")||"null");
 if(u){nameEl("name").value=u.name||"";nameEl("phone").value=u.phone||"";}
 if(a){nameEl("name").value=a.name||nameEl("name").value;nameEl("phone").value=a.phone||nameEl("phone").value;nameEl("address").value=a.address||"";nameEl("city").value=a.city||"";nameEl("state").value=a.state||"";nameEl("pincode").value=a.pincode||"";}
 renderCheckoutSummary();document.getElementById("checkout-form").addEventListener("submit",placeOrder);
});
function nameEl(id){return document.getElementById(id);}
function renderCheckoutSummary(){const c=getCart(),sub=c.reduce((s,p)=>s+p.price*p.quantity,0),ship=sub>=1000?0:50;document.getElementById("checkout-summary").innerHTML=`<h2>Order Summary</h2>${c.map(p=>`<div class="summary-row"><span>${escapeHtml(p.name)} × ${p.quantity}</span><strong>${money(p.price*p.quantity)}</strong></div>`).join("")}<div class="summary-row"><span>Shipping</span><strong>${ship?"₹50":"FREE"}</strong></div><div class="summary-row total"><span>Total</span><strong>${money(sub+ship)}</strong></div>`;}
function placeOrder(e){e.preventDefault();const c=getCart(),sub=c.reduce((s,p)=>s+p.price*p.quantity,0),ship=sub>=1000?0:50;const order={id:"BAT"+Date.now().toString().slice(-8),date:new Date().toISOString(),status:"PLACED",payment:document.querySelector('input[name="payment"]:checked').value,address:{name:nameEl("name").value,phone:nameEl("phone").value,address:nameEl("address").value,city:nameEl("city").value,state:nameEl("state").value,pincode:nameEl("pincode").value},items:c,subtotal:sub,shipping:ship,total:sub+ship};const orders=getOrders();orders.unshift(order);saveOrders(orders);saveCart([]);localStorage.setItem("lastOrderId",order.id);location.href="order-confirmation.html";}
