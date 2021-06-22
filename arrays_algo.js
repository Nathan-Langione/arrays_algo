
/* Print Values and Sum */
console.log("Print Values and Sum:")
var testArr = [6,3,5,1,2,4];
var sum = 0;
for (i = 0; i < testArr.length; i++){
    sum+=testArr[i];
    console.log("Num:"+testArr[i]+", Sum:"+sum)
}

/* Value * Position */
console.log("Value * Position:")
var testArr2 = [6,3,5,1,2,4]
for (i = 0; i < testArr.length; i++){
    testArr2[i] = testArr[i] * i;
}
console.log(testArr2)