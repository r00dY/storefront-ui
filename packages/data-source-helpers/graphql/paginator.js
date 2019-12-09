const paginator = (pagination = {}) => {
  const paginationData = [];

  ["first", "last", "page", "itemsPerPage"].forEach(param => {
    if (pagination[param]) {
      paginationData.push(`${param}: ${pagination[param]}`);
    }
  });

  return paginationData.length > 0 ? paginationData.join(",") : `first: 100`;
};

module.exports = paginator;
