expenses = [
    {amount : 100, category:"Utilies"},
    {amount : 200, category:"groceries"},
    {amount : 50, category:"Entertainment"}
    
]
expenses.map(data =>{
    data.tax = (data.amount*0.1)
})
console.log(expenses)