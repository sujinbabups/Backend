const UrlArray = [
    "https://jsonplaceholder.typicode.com/posts/1","https://jsonplaceholder.typicode.com/users/1","https://jsonplaceholder.typicode.com/todos/1"
];

async function ReadUrl(UrlArray) {
    let responses = [];

    for (let i of UrlArray) {
        let response = await PrintArray(i); 
        responses.push(response); 
        printData(response)
    }

    

}
function printData(resp)
{
    setTimeout(()=>{
        for(let j of resp)
            console.log(resp);

    },1000)
    

}

function PrintArray(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    resolve(json); 
                })
                .catch(error => reject(error)); 
        }, 2000); 
    });
}


ReadUrl(UrlArray);
