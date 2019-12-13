class QueryWithResult {
  constructor(params, data, error) {
    this.params = params;
    this.data = data;
    this.error = error;

    this._queryWithResult = true;
  }

  get isEmpty() {
    return !this.data && !this.error;
  }
}

function createGetter(fetchFunction) {
  const fun = async (query, options = {}) => {
    options.skipInBrowser = options.skipInBrowser || false;

    if (!process.browser || (process.browser && !options.skipInBrowser)) {
      try {
        const data = await fetchFunction(query);
        return new QueryWithResult(query, data, undefined);
      } catch (e) {
        return new QueryWithResult(query, undefined, e);
      }
    }
    return new QueryWithResult(query, undefined, undefined);
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
