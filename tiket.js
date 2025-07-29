let age = 60;
console.log("Your age is "+age+" Years");

let student=false;
let seniorCityjen=age>50;

if(age<10){
    console.log("Ticket is Free"); 
}
else if(student===true){
    console.log("You have get 50% discount");
}
else if(seniorCityjen===true){
    console.log("You have get discount 15%");
}
else{
    console.log("Ticket price is 800Tk");
}
