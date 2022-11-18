const ReactClone = (function () {
  let val, deps;
  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
    useEffect(callback, depArrays) {
      const hasNoDep = !depArrays;
      const hasChangedDeps = deps
        ? depArrays.every((depArray, index) => depArray !== deps[index])
        : true;

      if (hasNoDep || hasChangedDeps) {
        callback();
        deps = depArrays;
      }
    },
    useState(initialValue) {
      val = val || initialValue;

      const setState = (newVal) => {
        let fixVal = typeof newVal === "function" ? newVal(val) : newVal;
        val = fixVal;
      };

      return [val, setState];
    },
  };
})();

function AComponent() {
  const [count, setCount] = ReactClone.useState(20);

  ReactClone.useEffect(() => {
    console.log(`Hello There!, ${count}`);
  }, [count]);

  return {
    click: () => setCount((prevVal) => prevVal + 15),
    render: () => console.log(`render ${count}`),
    nothing: () => setCount((prevVal) => prevVal),
  };
}

let App = ReactClone.render(AComponent);
App.click();
App.render = ReactClone.render(AComponent);
App.click();
App.render = ReactClone.render(AComponent);
App.nothing();
