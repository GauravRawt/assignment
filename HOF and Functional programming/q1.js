const orderList =[
    {name : "Laptop" ,price : 120000},
    {name : "mobile" ,price : 70000},
    {name : "mobile charger" ,price : 1500},
    {name : "laptop charger" ,price : 105000}
]
total = 0
orderList.forEach((data)=> {
    total += data.price
    
})
console.log(total)