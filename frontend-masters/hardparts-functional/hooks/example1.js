// Example 1

const useState = (initialValue) => {
  let val = initialValue;

  const state = () => val;
  const setState = (newValue) => {
    val = newValue;
  };

  return [state, setState];
};

const [count, setCount] = useState(0);

console.log(count());

setCount(16);

console.log(count());
