/**
 *
 * @returns These code below will show you a lot of example between pure and impure function
 */

const reference =
  "https://observablehq.com/@anjana/exercise-pure-functions?collection=@anjana/functional-javascript-first-steps";

/*
There are two rules that determine wether or not a function is pure or not:
    - No Side Effects: A pure function has no effect on the program
     or the world besides outputting its return value
    - Given the same input values, a pure function will always return the same output. 
    This is because its return value depends only on its input parameters, and not on any other information
*/

// Impure Function => It will change if the date is different and depends something outside the world
function getDate() {
  return new Date().toDateString();
}

console.log(getDate());

// Pure Function => It always returns the same output if called with the same inputs

function getWorkshopDate() {
  return new Date(2020, 11, 4).toDateString();
}

console.log(getWorkshopDate());

// Pure Function => It's output depends on the input (Given the same input will always return the same output)
function toHex(n) {
  let hex = n.toString(16);
  return hex.padStart(2, "0");
}

console.log(toHex(2131));

// Pure Function => It's output depends on the input (Given the same input will always return the same output)
function rgbToHEX(R, G, B) {
  return "#" + [toHex(R), toHex(G), toHex(B)].join("");
}

console.log(rgbToHEX(10, 20, 3));

// Impure Function => There's no return in the function and this function below also change something outside the world, i.e changing dom element
function setColor(R, G, B) {
  const hex = rgbToHEX(R, G, B);
  const element = document.getElementById("color-me");
  element.setAttribute("style", "color", hex);
}

// Impure Function => Depends on something outside the world, i.e the API
async function readJsonFile(fileName) {
  const file = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
  );
  return await file.json();
}

console.log(readJsonFile("HIHIHi"));

// Pure Function, same reason like the rules above
function writeJsonString(object) {
  return JSON.stringify(object, null, 2);
}

console.log({ name: "Hello" });

// Pure Function, same reason like the rules above
function exclusiveOr(A, B) {
  return (A || B) && !(A && B);
}

console.log(exclusiveOr("HEHE", "HOHO"));

/*
A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, 
and it always returns the same output if called with the same input.
*/
function computeTruthTable(operator) {
  const truthValues = [true, false];
  const table = [];
  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B);
      table.push({ A, B, value });
    }
  }
  return table;
}

// Impure Function, same reason like the rules above
function showTruthTable(operator) {
  console.table(computeTruthTable(operator));
}
