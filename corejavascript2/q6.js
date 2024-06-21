//1
display = (name,role)=> console.log(`Hello My Name is ${name} and my role is ${role}`)
display("Gen","Mentalist")
//2
display.call(null,"Gen", "Mentalist")
//3
display.apply(null,["Gen","Mentalist"])
//4 
function greet () { console.log(`Hello ${this.name}`)}
//5
const user = {name : "PK"}
const boundGreet = greet.bind(user)
boundGreet()