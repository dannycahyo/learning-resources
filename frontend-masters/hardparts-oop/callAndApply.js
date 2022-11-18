const object = {
  num: 3,
  increment: function () {
    this.num++;
  },
};

const otherObj = {
  num: 10,
};

object.increment();

object;

object.increment.call(otherObj);

otherObj;

object.increment.apply(otherObj);

otherObj;
