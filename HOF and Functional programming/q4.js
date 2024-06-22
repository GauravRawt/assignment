expenses = [
    {amount : 100, category:"Utilies"},
    {amount : 200, category:"groceries"},
    {amount : 50, category:"Entertainment"}
    
]
x = expenses.filter((num) => {
    return num.category == "groceries"
})
console.log(x)
