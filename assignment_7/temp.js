function convertToFarenheit(a){
 return (a*(9/5)+32)
}
function convertToCelsius(b){
    return((b-32)*(5/9))
}
console.log(Math.round( convertToCelsius(100)* 10) / 10)
console.log(Math.round( convertToFarenheit(0)* 10) / 10)