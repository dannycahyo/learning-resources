const getApiURL = (apiHostName, resourceName, resourceId) => {
  return `https://${apiHostName}/api/${resourceName}/${resourceId}`;
};

const getUserURL = (userId) => {
  return getApiURL("localhost:3000", "users", userId);
};

const getOrderId = (orderId) => {
  return getApiURL("localhost:3000", "users", orderId);
};

const getProductId = (productId) => {
  return getApiURL("localhost:3000", "users", productId);
};

// Notice that the code above contains many duplcation of code.
const getResourceURL = (resourceName, resourceId) => {
  return getApiURL("localhost:3000", resourceName, resourceId);
};

const getUserURL2 = (userId) => {
  return getResourceURL("users", userId);
};

const getOrderURL = (userId) => {
  return getResourceURL("users", userId);
};
