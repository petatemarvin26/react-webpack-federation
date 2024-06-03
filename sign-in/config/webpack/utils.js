const { ROOT_DIR } = require("./constants");

const resolve = (path) => {
  return ROOT_DIR + "/" + path;
};

module.exports = {
  resolve,
};
