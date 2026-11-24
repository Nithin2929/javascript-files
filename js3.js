// // JSON Format
let person={
    "name":"john",
    "age":"22",
    "city":"New yo//rk"
}
// let jsondata=JSON.stringify(person);
// console.log(jsondata);
// //convert JSON to object
// let obj=JSON.parse(jsondata);
// console.log(obj);
// //conditional Statements
// let age=20;
// if (age>18){
//     console.log('The person is an adult and age is above 18 years');
// } else if(age==18){
//     console.log('The person is an adult and age is 18');
// }else{
//     console.log('The person is minor');
// }
 //multiple conditional statement
 if(age>18 && gender=="male"){
    console.log("The person is an adult and a male");
   }else if(age>18 && gender=="female"){
    console.log("The person is an adult and a female");
   }else if(age<=18 && gender=="male"){
     console.log("The person is a male child");
   }else{
    console.log("The person is a female child");
}
// // multiple conditional statement
// let mark=40;
// if(mark>20 || mark > 40){
//     console.log('The A grade of 40');
// }else if(mark >20 || mark < 40){
//     console.log('The B grade of 60')

// }

// let agree=true;

// if(agree){
//     console.log('Go ahead with the decision')
// }
// else{
//     console.log('Reconsider the decision')
// }
// //Ternary operator
// (agree)?console.log('I agree'):console.log('I disagree');

//Control Statement

//for loop---print number 1 to 10
// for (let i = 0; i < 10; i++){
//     console.log(i+1);
// }
//for of loop
// let fruits=['grapes','pear','pineapple']
// let str='Javascript'
// for (let x  of str) {
//     console.log(x);
// }
// for in loop
for(let key in person){
    console.log(person[key]);

}
//While loop
let ind=0;
while(ind<10){
    console.log(ind+1);
    ind++;
}
//do while loop
let x=10;
do{
    console.log(x);
   x++;

}while(x<=10);