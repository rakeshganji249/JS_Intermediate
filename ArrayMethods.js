//Filtering even numbers from an array
let numbers = [1,3,5,6,7,8]
console.log(numbers)
console.log(numbers.filter(a=>a%2 == 1))
let filteredNumbers=numbers.filter(a=>a%2==1)
console.log(filteredNumbers)

//update the each value of array using map method
let evenNumbers = [2,4,6,8]
console.log(evenNumbers)
console.log(evenNumbers.map(a=>a+1))
let oddNumbers=evenNumbers.map(a=>a+3)
console.log(oddNumbers)

//reduce method to sum the array
console.log(numbers.reduce((previousNuuber,currentNumber)=> currentNumber=previousNuuber+currentNumber))
console.log(evenNumbers.reduce((previousNuuber,currentNumber)=> currentNumber=previousNuuber+currentNumber))
