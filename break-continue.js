const nums = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(nums[i]>3){
        break;
    }
    // console.log(element);
}

const numbers = [1,-2,3,-4,5,-6,7,-8,9]
for (let i = 0; i < numbers.length; i++) {
    const element2 = numbers[i];
    if(numbers[i]<0){
        continue;
    }
    // console.log(element2);
}