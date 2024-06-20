const UrlArray = [
    "https://jsonplaceholder.typicode.com/posts/1","https://jsonplaceholder.typicode.com/users/1","https://jsonplaceholder.typicode.com/todos/1"
];

async function ReadUrl(UrlArray) {
    let responses = [];

    for (let i of UrlArray) {
        let response = await PrintArray(i); 
        responses.push(response); 
        // printData(response)
    }

    

}


function PrintArray(url) {
    pr =new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                })
                .catch(error => reject(error)); 
        }, 2000); 
    });
    
}


ReadUrl(UrlArray);
