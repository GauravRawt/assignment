obj1 = {
    name : "Senku",
    age : 19
}
obj2 = {
    name : "Chrome",
    age : 19
}
function fnc1 () {
    console.log(`Hello I'm ${this.name} and I'm ${this.age} years old.`)
}
fnc1.call(obj2)
