/*let marks=[87,34,56,33,56];

let sum=0;
for(let val of marks){ 
    sum+=val;
}


let avg=sum/marks.length;
console.log(`avg marks of the class=${avg}`);*/

/*let items=[250.645,300,900,50];

for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
console.log(items);*/




/*let i=0;
for(let val of items){
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after the offer=${items[i]}`);
    i++;
}

//push

let fooditems=["apple","orange","onion","biscuit"];
console.log(fooditems);

//slice

let marvelHeros=["thor","ironman","spiderman"];
console.log(marvelHeros);
console.log(marvelHeros.slice(0,3));

//splice
let arr=[1,2,3,4,5,6,7]; 
arr.splice(2,3,101,102);
console.log(arr);*/

//problem

let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];

// remove the first company from the array
//companies.shift();
//console.log(companies);
 
// remove uber & add ola in its place -- replacement
//companies.splice(2,1,"ola");
//console.log(companies);


// add amazon at the end  // push-end || unshift-start

companies.push("amazon");
console.log(companies);
