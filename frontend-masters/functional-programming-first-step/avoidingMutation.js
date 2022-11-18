// instead of myArray.push(element)
function push(element, array) {
  return [element, ...array];
}

console.log(push(3, [1, 2, 3]));

// instead of myArray[index] = value
function update(index, value, array) {
  return array.map((word, i) => (index === i ? value : word));
}

console.log(update(2, 5, [1, 2, 4]));

// instead of myArray.pop();
function pop(array) {
  return array.slice(0, -1);
}

console.log(pop([1, 2, 4]));
