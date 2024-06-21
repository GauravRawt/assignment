const ages = [19,22,19,24,20,25,26,24,25,24]
l = ages.length
ages.sort()
console.log(`minimum age is ${ages[0]} and maximum age is ${ages[l-1]}`)
if (l %2 ==0 ){
    console.log(`median is ${((ages[l/2]+ages[(l/2)+1])/2)}` )
} 
else{
    console.log(`median is ${ages[(l+1)/2]}`)

}
sum = 0
for (i=0 ; i<l ; i++){
    sum = sum+ages[i]
}
    
avg = sum/l
console.log(`average age is ${avg}`)
console.log(`range of  age is ${ages[l-1]-ages[0]}`)
min = Math.abs(ages[0]-avg)
max = Math.abs(ages[l-1]-avg)
if (max>min){
    console.log("Max-average is greater than Min-average")
}else if(min>max){
    console.log("Max-average is lesser than Min-average")
}
else{
    console.log("Max-average is equal Min-average")
}