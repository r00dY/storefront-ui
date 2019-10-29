if (typeof window === "undefined") {
  global.__BROWSER__ = false;
  global.__DEV__ = true;
} else {
  window.__BROWSER__ = true;
  window.__DEV__ = true;
}
