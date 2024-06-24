let marks=[87,34,56,33,56];

let sum=0;
for(let val of marks){ 
    sum+=val;
}


let avg=sum/marks.length;
console.log(`avg marks of the class=${avg}`);
