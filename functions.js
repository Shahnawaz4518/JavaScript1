 /*function myFunction(){
    console.log("I am Shahnawaz Khan");
    console.log("I am a engineer");
 }
 myFunction();*/

 /*function myFunction(msg,n){
    console.log(msg*n);
 }
 myFunction(" i am shahnawaz",100);


 //function -->2 numbers ,sum

 function sum(x,y){
    //local variables-->scope
  s=x+y;
  return s;
 }
 let val=sum(3,4);
 console.log(val);


//arraw functions
function sum(a,b){
    return a+b;
};

const arrowsum=(a,b) => {
    console.log(a+b);
}

//multipication function

function mul(a,b){
    return a*b;
}
const arrowMul=(a,b)=>{
    console.log(a*b);
}

//QUESTION 

function countVowels(str){
    //"ApnaCollage",count
    let count=0;
    for(const char of str){
       if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
        count++;
       } 
        
    }
    console.log(count) ;
}

// for each function

let arr=[1,2,3,4,5];

arr.forEach(function printVal(Val){
console.log(Val);
});

//question no-2

let nums=[2,3,44532 ,5,6];
nums.forEach((num)=>{
    console.log(num*num);
});

// map function

let nums=[1,2,3];

let newArr=nums.map((val)=>{
    return val*5 ;
});
console.log(newArr);

// filter method

let nums=[1,2,3];

let evenArr=nums.filter((val)=>{
    return val%2===0 ;
});
console.log(evenArr);

//reduce method
const arr=[1,2,3,101,4];

const output=arr.reduce((prev,curr)=>{
    return prev<curr ? prev:curr;
});
console.log(output);


//question 1

let arr=[50,90,56,91,98,78,84,71];

let marksArr=arr.filter((val)=>{
    return val>90;
});
console.log(marksArr);*/

// question 2
 
let n=prompt("Enter a number:"); 

let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((prev,curr)=>{
return prev+curr;
});
console.log("sum=",sum);

let factorial=arr.reduce((prev,curr)=>{
return prev*curr;
});
console.log("product=",factorial);