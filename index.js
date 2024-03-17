// Helper function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to calculate the square of a number
  function square(number) {
    return number * number;
  }
  
  // Helper function to calculate the factorial of a number
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Main function to demonstrate the use of helper functions
  function main() {
    const num = 5;
  
    console.log(`Is ${num} even? ${isEven(num) ? 'Yes' : 'No'}`);
    console.log(`Square of ${num}: ${square(num)}`);
    console.log(`Factorial of ${num}: ${factorial(num)}`);
  }
  
  // Call the main function
  main();
  