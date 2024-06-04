function Coin(coin,call)
{
    console.log(coin);
    call();
}


function FlipCoin()
{
    console.log("You got");
    c= Math.random() >= 0.5;
    // c = Math.random();
    if(c==true)
    console.log("Head");
    else
    console.log("Tail");
}

Coin("Flip",FlipCoin)







// Simulating a Coin Flip: Write a function flipCoin(callback) that simulates a coin flip using a callback function. The callback should 
// be called with either "heads" or "tails" depending on the random outcome.