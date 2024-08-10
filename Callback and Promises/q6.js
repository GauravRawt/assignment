function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    return fetch(userUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user details: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(userDetails => {
            return fetch(postsUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(posts => {
                    return {
                        userDetails,
                        posts
                    };
                });
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}

fetchUserDataAndPosts(1)
    .then(data => {
        console.log("User Details:", data.userDetails);
        console.log("User Posts:", data.posts);
    })
    .catch(error => {
        console.error("Error:", error);
    });
