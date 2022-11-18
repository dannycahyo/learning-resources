// Example 2 (Stale Closure)

const useStaleState = (initialValue) => {
  let val = initialValue;
  console.log(val, "LOCAL");

  const setState = (newValue) => {
    val = newValue;
    console.log(val, "Inside setState");
  };

  console.log(val, "LOCAL ON LAST");

  return [val, setState];
};

const [student, setStudent] = useStaleState("Danny");

console.log(student);

setStudent("Aka");

console.log(student);
