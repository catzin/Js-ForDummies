
const contToTen = () =>{
    k = 10;
    for(let i = 1; i <= k; i++){
        console.log(i);
    }
}

function tablas(arrNums){

    for(i in arrNums){

        tabla = arrNums[i];

        for(let j = 1; j <= 10; j++){
            let res = `${tabla} x ${j} = ${ tabla * j}`;
            console.log(res);
        }
        console.log("\n");
    }
    
}


const tablasV2 = function(arrNums){


    for(i in arrNums){

        tabla = arrNums[i];

        for(let j = 1; j <= 10; j++){
            let res = `${tabla} x ${j} = ${ tabla * j}`;
            console.log(res);
        }
        console.log("\n");
    }

}

module.exports = {
    contToTen,
    tablas,
    tablasV2
}