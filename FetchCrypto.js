async function Meadiastack(link)
{
    try {
        const respose=await fetch(link)
        const result=await respose.json();
        cname=result.chartName;
        console.log(cname);
        
    } catch (error) {
        console.log(error);
        
    }
    finally{
        console.log("");
    }
}
Meadiastack("https://api.coindesk.com/v1/bpi/currentprice.json")

