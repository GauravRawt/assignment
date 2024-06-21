const set = new Set([1,2,3,4,5,6,7,8])
let map = new Map()
set.forEach(num =>
    map.set(num, num**2)
)
console.log(map)