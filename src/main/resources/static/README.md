# BAT-CART — Complete E-commerce Frontend

This rebuilt version fixes the empty Products page and includes 20 demo products in:
- Electronics
- Watches
- Dresses
- Cosmetics
- Phones
- Laptops

## Important fix
The previous Products page could render nothing because `products.js` used `productCard()` while that function was defined in `app.js`, but `app.js` was not loaded by `products.html`.

`productCard()` is now in `commons.js`, which is loaded by every relevant page.

## Product features
- 20 products
- Search by product name, brand, category and description
- Category filter
- Brand filter
- Price-range filter
- Featured / price / name / rating / newest sorting
- Active filter chips
- Reset filters
- Product detail pages
- Wishlist
- Cart quantity controls
- Checkout
- Demo orders
- Login/register/profile/address
- Responsive vibrant UI
- BAT-CART branding and requested motto

## Run with Spring Boot

Copy the contents of this ZIP into:

`src/main/resources/static/`

Then:

`.\mvnw.cmd spring-boot:run`

Open:

`http://localhost:8080/`

## Demo storage
This version uses browser `localStorage` for users, cart, wishlist, orders and address so the frontend is testable immediately.

For production, replace those localStorage operations with your Spring Boot REST API and never store real passwords in localStorage.
