// Array to hold cart items
let cart = [];

// Function to add items to the cart
function addToCart(productName, price) {
    const product = {
        name: productName,
        price: price,
        quantity: 1
    };

    // Check if the product is already in the cart
    let productInCart = cart.find(item => item.name === productName);
    if (productInCart) {
        productInCart.quantity += 1; // Increment quantity if already in cart
    } else {
        cart.push(product); // Add product if not already in cart
    }

    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display updated cart
    displayCart();

    alert(`${productName} added to cart!`);
}

// Function to display cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous cart content

    // Get cart from local storage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

    let total = 0;

    savedCart.forEach(item => {
        total += item.price * item.quantity;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <p>${item.name} (x${item.quantity}) - $${item.price * item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    document.getElementById('total-price').textContent = total;
}

// Function to remove items from the cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Checkout function (you can extend this to a payment page)
function checkout() {
    alert("Proceeding to checkout!");
    // Implement your checkout logic here (e.g., redirect to payment gateway)
}

// Display cart items when the page loads
window.onload = function() {
    displayCart();
}
