const tabla = 10;
let i = 0;
let j=1;
let tablas = [1,2,3,4,5,6,7,8,9,10];

for(i=1; i<=10 ; i++){
    let cadena =`${tabla} x ${i} = ${i*tabla}`;
    console.log(cadena);
}
console.log("------------");

for(i=1; i<=10 ; i++){
   let j=1;
    tablas.forEach((num) => { console.log(j++,"x",i,"=",num*i) } );
    
}