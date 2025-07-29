let number1 = 1000;
let number2 = 4001;

console.log(typeof number1,typeof number2);

let result;

result= number1 + number2 ;
console.log(result.toFixed(2));

if(result>=1000 && result<=10000){
    if(result>5000 && result<=10000){
        console.log("Tor deya number ta 5K er oupore 10K er niche");
    }
    else{
        if(result>=2000 && result <=5000){
            console.log("tor deya number ta 1k er oupore ar 5k er niche");
        }
        else{
            console.log("Tor deya number ta 1k er oupor ar 2k er niche");
        }
        
    }
}
else if(result>10000 && result<=20000){
    console.log("tor deya jogfol 10k er oupore ar 20ke er niche");

}
else{
    console.log("tor deya number ta 20K er cheya boro");
}