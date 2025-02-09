function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("Rakesh", sayGoodbye);
  

  function multiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(5)); 
  console.log(triple(5)); 