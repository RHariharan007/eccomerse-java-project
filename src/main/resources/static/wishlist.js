document.addEventListener("DOMContentLoaded",renderWishlist);
function renderWishlist(){const list=getWishlist(),el=document.getElementById("wishlist-grid");if(!list.length){el.innerHTML='<div class="empty" style="grid-column:1/-1"><h2>Your wishlist is empty</h2><a class="btn" href="products.html">Browse Products</a></div>';return;}el.innerHTML=list.map(productCard).join("");}
