const arr1 = [1,2,3,4,5];

const arr2 = arr1.map((i) => {
    return i * 2;
})

console.log(arr2);


const arr3 = arr1.filter((n) => {
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
});

console.log(arr3);