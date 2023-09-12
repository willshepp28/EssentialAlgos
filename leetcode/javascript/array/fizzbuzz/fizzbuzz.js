let fizzBuzz = (int) => {
    let arr = [];
    
    for(let index = 1; index <= int; index++) {
      if(index % 3 === 0 && index % 5 !== 0) {
        arr.push("Fizz");
        continue;
       }

      if(index % 5 === 0 && index % 3 !== 0){
        arr.push("Buzz")
        continue;
      } 

      if(index % 5 === 0 && index % 3 === 0) {
          arr.push("FizzBuzz");
          continue;
      }

      arr.push(`${index}`)
    }

    return arr;
}

module.exports = fizzBuzz;