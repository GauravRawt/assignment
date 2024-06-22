function shoppingCart(){
    CartItems = []
    return{
        getCartItems : function(){
            return CartItems
        }
    }
}
const cart = shoppingCart()
console.log("Cart Items: ", cart.getCartItems())