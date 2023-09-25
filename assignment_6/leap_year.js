function leapYears(a){
    if (a%100 == 0 && a%400 == 0){
        return "is a leap year"
    }
    else if (a %100==0){
        return "is not a leap year"
    }
    else if (a % 4 == 0){
        return "is a leap year"
    }
    else{
        return "is not a leap year"
    }
}
console.log(leapYears(1985))