document.addEventListener("DOMContentLoaded",()=>{
 const os=getOrders(),el=document.getElementById("orders-list");
 if(!os.length){el.innerHTML='<div class="empty"><h2>No orders yet</h2><a class="btn" href="products.html">Start Shopping</a></div>';return;}
 el.innerHTML=os.map(o=>`<div class="card order-card"><div class="order-head"><div><strong>${escapeHtml(o.id)}</strong><div class="muted">${new Date(o.date).toLocaleString()}</div></div><span class="status">${escapeHtml(o.status)}</span></div><p><strong>${money(o.total)}</strong> • ${o.items.length} product(s)</p><details><summary>View items</summary>${o.items.map(p=>`<p>${escapeHtml(p.name)} × ${p.quantity} — ${money(p.price*p.quantity)}</p>`).join("")}</details></div>`).join("");
});
