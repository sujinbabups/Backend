function dNmbr(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(n * 2);
        }, 1000);
    });
}


async function Numbers(Narr) {
    for (const n of Narr) {
        const res = await dNmbr(n);
        console.log(res);
    }
    
}



const NmbrArray = [2, 4, 6, 8, 10];
console.log("Array = ",NmbrArray);
Numbers(NmbrArray);