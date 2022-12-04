//Always Hungry
function alwaysHungry(arr) {
var arr
for(var i=0;i<arr.length;i++){
    if (i=="food") {
        console.log("yammy")}
    else{
    console.log("Im hungry")
        }

    }

//High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var j=0; j<arr.length;j++){
        if(i!=cutoff){
            filteredArr.push(i)   
        }}
    
    return filteredArr;
}

//Better than average
function betterThanAverage(arr) {
    var sum = 0;
    var avg=0;
    var count = 0
    for( a=0; a<arr.length; a++){
        sum+=a;
        avg=sum/arr.length;
        if(a>avg){
            count+=1
        }
    }
    
    return count;
}

//Array Reverse
function reverse(arr) {

    for(var r=0; r<arr.length;r++){
        arr[r]=arr[(arr.length-1)-r]
    }
    return arr;
}

//Fibonacci Array
function fibonacciArray(n) {

    var fibArr = [0, 1];
    for(var f=0;f<=n;f++)
        {
            sum=n1+n2;
            n1=n2;
            n2=sum;
            fibArr.push(sum)
        }
    }
    return fibArr;
}

