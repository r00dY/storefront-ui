function stringToHandle(string) {
  return string.toLowerCase().replace(/ /g, "-");
}

export default stringToHandle;
