async function fetchMultipleData(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url));
        const responses = await Promise.all(fetchPromises);

        const dataPromises = responses.map(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch from ${response.url}: ${response.status} ${response.statusText}`);
            }
            return response.json();
        });

        return await Promise.all(dataPromises);
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;  
    }
}


const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleData(urls)
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error("Error:", error);
    });
