const brain = require('brain.js');

// Create a new neural network
const net = new brain.NeuralNetwork();

// Create a training data set
const trainingData = [
  { input: { a: 1, b: 2, c: 3 }, output: { average: 2 } },
  { input: { a: 2, b: 3, c: 4 }, output: { average: 3 } },
  { input: { a: 3, b: 4, c: 5 }, output: { average: 4 } },
  // Add more training examples here
];

// Train the neural network
net.train(trainingData);

// Test the trained model
const inputValues = { a: 2, b: 3, c: 2 };
const output = net.run(inputValues);

console.log(`Input: ${inputValues.a}, ${inputValues.b}, ${inputValues.c}`);
console.log(`Predicted Average: ${output.average}`);