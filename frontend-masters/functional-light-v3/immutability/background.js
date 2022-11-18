// BEWARE OF MUTATION AND ASSIGNMENT

// MUTATION
const danny = "Danny";
danny[0] = "i";
console.log(danny);

// ASSIGNMENT
const aka = "AKA";
// aka = "AJI" // WE CAN't DO THAT

let age = 16;

// MUTATION
const school = {
  name: "SMP COK",
  location: "CONDONG",
};

school.location = "MARON";

console.log(school);

// PASS BY REFERENCE CASE ==> Dangerous Case We Should Avoid Mutations

function processOrder(order) {
  order.items = ["JAN"];
  return order;
}

const orderDetails = {
  orderId: "42",
  totalPrice: 20 + 220,
};

const newObject = processOrder(orderDetails);

newObject;
orderDetails;

// THIS CAN AVOID PASS BY REFERENCE

function processOrder2(order) {
  order.totalPrice = 1000;
  return order;
}
const newOrderDetails = {
  orderID: 90,
  totalPrice: 100,
};
const newObjectOrderDetails = processOrder2(Object.freeze(newOrderDetails));

newOrderDetails;
newObjectOrderDetails;

// WE CAN INSTEAD MAKE A COPY OF NEW ONE
function processOrder3(order) {
  const newOrder = { ...order };
  newOrder.totalPrice = 110;
  return newOrder;
}
const newOrderDetails2 = {
  orderID: 90,
  totalPrice: 100,
};
const newObjectOrderDetails2 = processOrder3(newOrderDetails2);

newOrderDetails2;
newObjectOrderDetails2;
