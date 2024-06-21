const map = new Map()
map.set( "Senku",{
    "Age": 19,
    "email" : "sdihadb@gmail.com",
    "location":"New Delhi"
})
map.set( "Chrome",{
    "Age": 19,
    "email" : "schrdb@gmail.com",
    "location":"New Delhi"
})
map.set( "Kaseki",{
    "Age": 69,
    "email" : "sdihadb@gmail.com",
    "location":"Mumbai"
})
fnc1 = (name) => console.log(map.get(name))
fnc1("Kaseki")




