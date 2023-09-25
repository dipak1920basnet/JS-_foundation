function removeFromArray(a,b){
    if (b.length > 1){
        for (let i = 0; i < a.length; i++){
            for (let j = 0; j <b.length; j++){
                if (a[i]==b[j]){
                    a.splice(i,1)
                }
            }
        }
    }

    else{for (let i = 0; i < a.length; i++){
        if (a[i]==b){
            a.splice(i,1)
        }
    }}
    console.log(a)
}
removeFromArray([1, 2, 3, 4], 1);