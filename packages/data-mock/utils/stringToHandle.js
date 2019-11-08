function stringToHandle(str) {
  return str.toLowerCase().replace(/ /g, "-");
}

module.exports = stringToHandle;
