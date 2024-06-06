function StartPrgm(callb)
{
    setTimeout(()=>{
        console.log("Started studying programming");
        callb();
    },1000)
    
}
function Frontend(callb)
{
    setTimeout(()=>{
        console.log("studying frontend");
        callb();
    },1000)
}

function Html(callb)
{
    setTimeout(()=>{
        console.log("Studying HTML");
        callb();
    },1000);
}
function Stdcss(callb)
{
    setTimeout(()=>{
        console.log("Studying CSS");
        callb();
    },1000);
}
function Tailwind(callb)
{
    setTimeout(()=>{
        console.log("Studying Tailwind");
        callb()
    },1000)
}
function Current(callb)
{
    setTimeout(()=>{
        console.log("Studying Backend");
    })
}

StartPrgm(()=>{
    Frontend(()=>{
        Html(()=>{
            Stdcss(()=>{
                Tailwind(()=>{
                    Current(()=>{
                        
                    })

                })

            })
        })
    })
})





  












// Create a callback hell functionality with a minimum of 4 callbacks each function should do a separate task.
// Eg:

