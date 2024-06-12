async function AsyncFn(link)
{
    try {
        const response=await fetch(link)
        const result=await response.json();
        console.log(result);
        console.log("title = "+result.title);
        // console.log(uid);
        
    } catch (error) {
        console.log(error);
        
    }
    finally{
        console.log("Execution completed");
    }
}
AsyncFn("https://jsonplaceholder.typicode.com/posts/1")