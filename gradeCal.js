let mark = parseInt("45");

console.log(typeof mark); //Type Dekhar Jonno eita 

console.log(mark.toFixed(3)) //Dot er por Koyghor Dekhabe seita nirdes kore jemon eitate 3 ghor dekhabe dot er pore

if(mark >= 80){
    console.log('Your Grade is = A+');
}
else if(mark >= 70 && mark < 80){
    console.log('Your Grade is = A');
}
else if(mark >=60 && mark <70){
    console.log('Your Grade is = A-');
}
else if(mark >=50 && mark <60){
    console.log('Your Grade is = B');
}
else if(mark >=40 && mark <50){
    console.log('Your Grade is = C');
}
else if(mark >= 33 && mark<40){
    console.log('Your Grade is = D');
}else{
    console.log('Sorry You are Fail')
}