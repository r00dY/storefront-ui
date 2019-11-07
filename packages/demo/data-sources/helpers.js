export class QueryWithResult {
  constructor(query, params, data, error) {
    this.query = query;
    this.params = params;
    this.data = data;
    this.error = error;

    this._queryWithResult = true;
  }

  get isEmpty() {
    return !this.data && !this.error;
  }
}

export function createGetter(fetchFunction, query) {
  const fun = async (params = {}, options = {}) => {
    options.skipInBrowser = options.skipInBrowser || false;

    if (!process.browser || (process.browser && !options.skipInBrowser)) {
      try {
        const data = await fetchFunction(params);
        return new QueryWithResult(query, params, data, undefined);
      } catch (e) {
        return new QueryWithResult(query, params, undefined, e);
      }
    }
    return new QueryWithResult(query, params, undefined, undefined);
  };

  return fun;
}

export function flattenEdges(data) {
  let ret = {};

  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof Object && value.edges) {
      ret[key] = value.edges.map(x => flattenEdges(x.node));
    } else {
      ret[key] = value;
    }
  });

  return ret;
}
