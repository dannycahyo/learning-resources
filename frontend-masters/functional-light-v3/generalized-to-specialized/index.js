function ajax(URL, userID, callback) {}

ajax(CUSTOMER_API, { id: 42 }, renderCustomer);

// We can make it more specific and clear
function getCustomer(userID, callback) {
  return ajax(CUSTOMER_API, userID, callback);
}
getCustomer({ id: 42 }, () => {});

// We can even make it more specific again
function getCurrentCustomer(callback) {
  return getCustomer({ id }, callback);
}

getCurrentCustomer(renderCustomer);

// So this is the idea of generalition to specialization
/*
    - More declarative 
    - More clear because we can give semantics name so that the reader of the code can understand
    - Every function has its own context and information
*/
