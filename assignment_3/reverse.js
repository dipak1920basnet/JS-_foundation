function reverseString(a){
    k = ''
    for (let i = a.length-1; i >=0; i--){
        k += a[i]
    }
    console.log(k)
}
reverseString('Hello')