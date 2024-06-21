const calculator = {
    add: function(a,b){
        return a+b
    },
    sub: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a*b
    },
    calculate: function(operation,a,b){
        if(operation=="add"){
            return this.add(a,b)    
        }
        else if(operation == "sub"){
            return this.sub(a,b)
        }
        else if(operation == "multiply"){
            return this.multiply(a,b)
        }
    } 
}
console.log(calculator.calculate.call(calculator,"add",2,3))
console.log(calculator.calculate.apply(calculator,["multiply",2,3]))

discountCalculator = {
    discountPercentage : 20,
    applyDiscount : function(amount){
        return amount -(amount * this.discountPercentage)/100
    }
}
const x = discountCalculator.applyDiscount.bind(discountCalculator)

console.log(x(200))
 