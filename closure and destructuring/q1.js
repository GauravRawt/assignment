function createcounter(){
    let count = 0
    return function(){
        count++
        console.log(count)
    }
}
click = createcounter()
click()
click()