const arrayMethod = {
  filter: (array, callbackFn) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      if (callbackFn(value) === true) {
        result.push(value);
      }
    }

    return result;
  },
};

const arrayOfNum = [2, 3, 4, 5, 5, 2, 4];

const filterNumberTwo = arrayMethod.filter(arrayOfNum, (num) => num > 2);
console.log(filterNumberTwo);
