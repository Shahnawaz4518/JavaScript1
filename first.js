// conditional statement

/*let age=15;
if(age>18){
    console.log("you can vote");
}
if(age<18){
    console.log("you cannot vote");
}*
let mode="dark-mode";
let color;
if(mode==="dark-mode"){
    color="black";
}
if(mode==="light"){
    color="white";
}

let age=34;
if(age<18){
    console.log("junior");
}
else if(age>60){
console.log("senior");
}
else{
    console.log("middle");
}

let age=45;
let result=age>=18 ? console.log("adult"):console.log("not adult");
//console.log(result);


// let name=prompt("hello!");
 //console.log(name);

 let num=prompt("Enter the number:");

 if(num%5===0){
    console.log("this number is multiple of 5")
 }else{
    console.log("this number is not a multiple of 5")
 }*/

let num=prompt("Enter the student marks:");
if(num>=80 && num<=100){
    console.log(num,"A grade");
}
else if(num>=70 && num<=89){
    console.log(num,"B grade");
}
else if(num>=60 && num<=69){
    console.log(num,"C grade");
}
else if(num>=50 && num<=59){
    console.log(num,"D grade");
}
else if(num>=0 && num<=49){
    console.log(num,"F grade");
}
  