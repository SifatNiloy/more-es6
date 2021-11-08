let phone = "realme 8 pro"
//template string
const mynotes = `I am niloy. I have a ${phone}`
console.log(mynotes);

//default parameter
//spread or three dots

function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);
//arrow function
const squre = x => x * x;
console.log(squre(9))