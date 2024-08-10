const cart = [];  
function addToCart(productName, price, quantity) {
    if (!productName) {
        throw new Error('Product name is required');
    }
    if (typeof price !== 'number' || price <= 0) {
        throw new Error('Invalid product price');
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error('Invalid quantity');
    }
    
    cart.push({ productName, price, quantity });
    console.log(`Added ${quantity} of ${productName} at $${price} each to the cart`);
}

function checkout() {
    if (cart.length === 0) {
        throw new Error('Cart is empty. Add items before checkout');
    }
    
    let totalAmount = 0;
    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
    });

    cart.length = 0;  
    return `Checkout successful. Total amount: $${totalAmount.toFixed(2)}`;
}

try {
    console.log('Adding products to the cart:');
    addToCart('Laptop', 999.99, 2);
    addToCart('', 999.99, 2);
} catch (error) {
    console.error('Add to Cart Error:', error.message);
}

try {
    addToCart('Phone', -299.99, 1);
} catch (error) {
    console.error('Add to Cart Error:', error.message);
}

try {
    addToCart('Headphones', 199.99, -1);
} catch (error) {
    console.error('Add to Cart Error:', error.message);
}

try {
    console.log('Checkout process:');
    console.log(checkout());
    console.log(checkout());
} catch (error) {
    console.error('Checkout Error:', error.message);
}
