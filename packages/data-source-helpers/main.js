class QueryWithResult {
  constructor(queryName, params, data, error) {
    this.queryName = queryName;
    this.params = params;
    this.data = data;
    this.error = error;

    this._queryWithResult = true;
  }

  get isEmpty() {
    return !this.data && !this.error;
  }
}

function createGetter(queryName, fetchFunction) {
  const fun = async (params = {}, options = {}) => {
    options.skipInBrowser = options.skipInBrowser || false;

    if (!process.browser || (process.browser && !options.skipInBrowser)) {
      try {
        const data = await fetchFunction(params);
        return new QueryWithResult(queryName, params, data, undefined);
      } catch (e) {
        return new QueryWithResult(queryName, params, undefined, e);
      }
    }
    return new QueryWithResult(queryName, params, undefined, undefined);
  };

  return fun;
}

function flattenEdges(data) {
  let ret = {};

  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof Object && value.edges) {
      ret[key] = value.edges.map(x => flattenEdges(x.node));
    } else if (value instanceof Object && !Array.isArray(value)) {
      ret[key] = flattenEdges(value);
    } else {
      ret[key] = value;
    }
  });

  return ret;
}

module.exports = {
  QueryWithResult,
  createGetter,
  flattenEdges
};
7;
