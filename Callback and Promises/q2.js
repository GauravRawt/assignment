function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 2000)
    })
}

getData().then((message) => {
    console.log(message)
})
