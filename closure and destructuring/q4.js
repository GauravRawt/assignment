function shoppingCart(){
    CartItems = []

    function itemIndex(productId){
        return CartItems.findIndex(item => item.id === productId)
    }
    return{
        addItems : function(product){
            const index = itemIndex(product.id)
            if (index  === -1){
                CartItems.push({...product,quantity:1})
            }else{
                CartItems[index].quantity++
            }
        },
        getCartItems : function(){
            return CartItems
        }
    }
}
const cart = shoppingCart()
console.log("Cart Items: ", cart.getCartItems())

const product1 ={id:1 ,product : "Product1",price:10}
const product2 ={id:2 ,product : "Product2",price:20}

cart.addItems(product1)
cart.addItems(product2)
cart.addItems(product1)

console.log("Cart Items: ", cart.getCartItems())


