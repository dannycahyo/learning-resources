const partial = (fn, ...argsToApply) => {
  return (...restArgsToApply) => {
    return fn(...argsToApply, ...restArgsToApply);
  };
};

const getApiURL = (apiHostName, resourceName, resourceId) => {
  return `https://${apiHostName}/api/${resourceName}/${resourceId}`;
};

// We can partially the function become =>
const getResourceURL = partial(getApiURL, "locahost:3000");

const getUserURL = (userId) => {
  return getResourceURL("users", userId);
};

const getOrderURL = (orderId) => {
  return getResourceURL("orders", orderId);
};

const getProductURL = (productId) => {
  return getResourceURL("products", productId);
};

const getUserURL2 = partial(getApiURL, "locahost:3000", "users");
const getCurrentUser = getUserURL2("danny");
console.log(getCurrentUser);
