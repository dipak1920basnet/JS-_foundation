function sumAll(a,b){
    let k = 0;
    if (b < a){
        for(let  i = b; i <=a; i++){
            k +=i
        }
        // for (let i = a; i <=b; i--){
        //     k = k+i
        // }
    }
    else{
        for (let i = a; i <=b; i++){
            k = k+i
        }
    }
    console.log(k)
}
sumAll(0,-1);