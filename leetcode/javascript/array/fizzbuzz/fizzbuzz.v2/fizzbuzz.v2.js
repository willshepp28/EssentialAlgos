
let fizzBuzz = (int) => {
    let arr = [];

    for(let index = 1; index <= int; index++){
        let value = '';

        if(index % 3 === 0){
            value += "Fizz";
        }

        if(index % 5 === 0){
            value += "Buzz";
        }

        if(!value){
            value += `${index}`;
        }

        arr.push(value);
    }

    return arr;
}

module.exports = fizzBuzz;