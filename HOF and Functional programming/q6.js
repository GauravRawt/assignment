expenses = [
    {amount : 100, category:"Utilies"},
    {amount : 200, category:"groceries"},
    {amount : 50, category:"Entertainment"}
    
]
function categories(data){
    if (data.amount>100){
        return "High Expense"
    }else if (data.amount<=100){
        return "Low Expense"
    }
    
}
expenses.map(data => {
    data.smtg = categories(data)
})
console.log(expenses)