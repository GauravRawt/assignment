expenses = [
    {amount : 100, category:"Utilies"},
    {amount : 200, category:"groceries"},
    {amount : 50, category:"Entertainment"}
    
]
x= expenses.reduce((acc,data)=>acc + data.amount,0)
console.log(x)