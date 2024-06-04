fetch('https://jsonplaceholder.typicode.com/posts/30')
.then(respose=>respose.json())
.then(json=>console.log(json))
.catch(error=>{
    console.log(error);
});


// Write a Node.js program that
//  fetches data from a public API using Promise concept.(Try with jsonplaceholder)
