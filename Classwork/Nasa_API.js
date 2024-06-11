async function NasaApi(link)
{
    try {
        const response=await fetch(link)
        const result=await response.json();
        id=result.object.fullname;
        console.log(id);
        
    } catch (error) {
        console.log(error);
        
    }
    finally{
        console.log("");
    }
}
NasaApi("https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=2015ab")

