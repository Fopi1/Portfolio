function func1(a, b) {
  if (a <= b) {
    return a;
  } else {
    return b;
  }
}

function main(args) {
  if (args.length < 3) {
    console.log(`Usage: ${args[0]} <integer1> <integer2>`);
    return 1;
  }
  let num1 = parseInt(args[1], 10);
  let num2 = parseInt(args[2], 10);
  let result = func1(num1, num2);
  console.log(`Result: ${result}`);
  return 0;
}

// Example of how to run the main function with process.argv, which contains command line arguments
// The first two arguments in process.argv are the path to the node executable and the path to the script file
main([3742084308, 182476535]);
