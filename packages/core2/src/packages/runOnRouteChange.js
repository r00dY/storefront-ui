function runOnRouteChange() {
  if (!window.__cui_onRouteChange) {
    return;
  }

  window.__cui_onRouteChange.forEach(callback => {
    callback();
  });
}

export default runOnRouteChange;
