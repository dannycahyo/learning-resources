// Background ==> Look at the generalized-to-specialized code

// PARTIAL =================================================================
// *partial is functional library utilities
function ajax(URL, userID, callback) {}
const getCustomer = partial(ajax, CUSTOMER_API);
const getCurrentCustomer = partial(getCustomer, { id: 42 });

getCurrentCustomer(renderCustomer);

// CURRYING =================================================================
const ajaxManualCurry = (URL) => (userId) => (callback) => {};

const ajaxCurry = curry(3, ajax);
const getCustomerCur = ajaxCurry(CUSTOMER_API);
const getCurrentCustomerCur = ajaxCurry({ id: 42 });
getCurrentCustomerCur(renderCustomer);

// Strict Currying
ajaxCurry(CUSTOMER_API)({ id: 42 })(renderCustomer);

// Loose Currying
ajaxCurry(CUSTOMER_API, { id: 42 })(renderCustomer);

// CHANGING FUNCTION SHAPE WITH CURRYING =================================================================
const add = (x, y) => x + y;

[0, 2, 4, 4, 5, 6].map(function addOne(v) {
  return add(1, v);
});

// What if we changing the shape of the function

const addCur = curry(2, add)[(0, 2, 4, 4, 5, 6)].map(addCur(1));
// See? We can get the point free
