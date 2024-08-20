var Number1 = 15;
var Number2 = 15;
if (Number1 == Number2){
    console.log("Number1 and Number2 are equal")
}
else {
    console.log("not equal");
}

//even or odd
var num = 15;
if(num % 2== 0){
    console.log("num is even")
}
if (num % 2 == 1){
    console.log("num is odd")
}
else {
    console.log("nothing")
}

//positive or not
var num1 = 15;
if (num1 > 0){
    console.log("num1 is positive")
}
else {
    console.log("num1 is negative")
}


//leap year or not
var numm = 2016;
if(numm % 4== 0){
    console.log("it's a leap year")
}
else {
    console.log("nothing")
}

//eligible age to vote
var data = 21;
if (data >=18 ){
    console.log("eligible to vote")
}
else {
    console.log("nothing")
}

//time greeting
var time = new Date();
var currentHour = time.getHours();

if (currentHour < 12){
    console.log("Good morning")
}
else if(currentHour <= 15){
    console.log("good afternoon")
}
else{
    console.log("good night")
}

