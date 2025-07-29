let mark = parseInt("-0");         // string থেকে number বানানো
console.log(mark.toFixed(2));      // দশমিকসহ দেখাবে: "79.00"
console.log(typeof mark);         // number

if(mark >= 80 && mark <= 100){
    if(mark >= 80 && mark <= 90){
        console.log('Ish... Mark valo kintu Golden A+ Miss');
    } else if(mark > 90 && mark <= 100){
        console.log('🎉 Congratulation! You got Golden A+');
    }
} 
else if(mark >= 70 && mark <= 79){
    if(mark >= 75 && mark <= 79){
        console.log('Toi A paisis, thik ase... tobe jodi ar aktu porti tahole A+ asto!');
    }
    else{
        console.log('Your Result is A');
    }
}
else if(mark >= 60 && mark <= 69){
    if(mark >= 65 && mark <=69){
        console.log("aber miss korli olpo aktu porle tor result A- asto");
    }
    else{
        console.log("Your Result's is A-")
    }
}
else if(mark >= 50 && mark <= 59){
    console.log("Your Grade is = B");
}
else if(mark >= 40 && mark <= 49){
    console.log("Your Grade is = C");
}
else if(mark >= 33 && mark <= 39){
    console.log("Your Grade is = D");
}
else {
    console.log("We are So Sorry You are Fail in The examinition!");
}
