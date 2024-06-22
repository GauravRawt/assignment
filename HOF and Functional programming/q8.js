values  = [2,5,8,10,3]
even = []
values.forEach(num => {
    if (num%2 ==0){
        even.push(num)
    }
})
console.log(even)