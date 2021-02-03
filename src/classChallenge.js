// Create a new file in your src folder called `classChallenge.js`
// - Inside the `classChallenge.js` file make one default export and two named exports
//   - The default export should be a function that returns `<div>classChallenge</div>`
//   - One of the named exports needs to be a varibale and the value is a string `welcome`
//   - One of the named exports needs to be a function that returns the sum of an array of numbers
// - Import the `classChallenge.js` file into the `bootstrap.js` file and use the all of the exported items.

export default () => {
    return '<div>classChallenge</div>';
};

export let greeting = 'Welcome';

export function sumUp(arr) {
    let sum  = arr.reduce((total, currentValue) => { return total += currentValue})
    return sum
}