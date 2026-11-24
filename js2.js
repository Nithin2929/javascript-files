let array1 = [1, 2, 3, 4, 5,'red', 'green', 'blue'];
console.log(array1);
console.log(array1.length);
console.log(array1[3]);
array1.push('yellow');
console.log(array1);

array1.pop();
console.log(array1);
array1.unshift('purple');
console.log(array1);
array1.shift();
console.log(array1);
let array2=array1.slice(2, 5);
console.log(array2);
array1.splice(2, 3, 'orange', 'pink');
console.log(array1);
//objects
let person = {
    firstName: 'John',
    age: 22,
    place: 'New york'}
console.log(person['age']);

let person1 = {
    secondName: 'Smith',
    age: 25,
    place: 'Los Angeles'}
console.log(person1['age']);
let dhoni = {
    firstName: 'MS',
    lastName: 'Dhoni',
    age: 40,
    place: 'Ranchi',
}
class Car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

let obj_car1=new Car('Ford', 'Mustang', 2021);
console.log(obj_car1.brand);

let obj_car2=new Car('Chevrolet', 'Camaro', 2020);
console.log(obj_car2.model);

let student=[{firstName: 'Alice', age: 20}, {firstName: 'Bob', age: 22}]
let student1=[{firstName: 'Charlie', age: 23}, {firstName: 'David', age: 21}]
console.log(student[1].firstName);



    

function addnum(a,b){
    var sum=a+b;
    
    return sum;

}
var result=addnum(25,45);
console.log(`sum of two numbers is ${result}`);

let addnum=(a,b)=>{
    return a+b;
}
var result=addnum(22,45);
console.log(`sum of two numbers is ${result}`);

let numbers=[1,2,3,4,5];
numbers.forEach((item,ind,arr3)=>{
    arr3[ind]=item>2;
})
console.log(numbers);

//filter fuction
let ages=[12, 15, 18, 20, 25];
let adult=ages.filter((age)=>{return age>=18;
})

console.log();
let [X, Y, Z]=[0,,3];
console.log(X);
console.log(Y);
console.log(Z);

let arr4=[1,2,3];
let arr5=[44,55,10];
let arr6=[...arr4,...arr5];
console.log(arr6);