document.addEventListener("DOMContentLoaded",()=>{
 const id=localStorage.getItem("lastOrderId"),o=getOrders().find(x=>x.id===id),el=document.getElementById("confirmation");
 if(!o){el.innerHTML='<h1>No recent order found</h1><a class="btn" href="products.html">Shop Now</a>';return;}
 el.innerHTML=`<div class="success-icon">✓</div><h1>Order Placed Successfully!</h1><p>Thank you for shopping with BAT-CART.</p><p><strong>Order ID:</strong> ${escapeHtml(o.id)}</p><p><strong>Total:</strong> ${money(o.total)}</p><p><strong>Payment:</strong> ${escapeHtml(o.payment)}</p><br><a class="btn" href="orders.html">View Orders</a> <a class="btn secondary" href="products.html">Continue Shopping</a>`;
});
