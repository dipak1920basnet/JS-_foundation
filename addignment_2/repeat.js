function repeatString(a,b){
    result = ''
    for (let i = 1; i<=b; i++){
        result += a
    }
    console.log(`${result}`)
}
repeatString('hey',3)