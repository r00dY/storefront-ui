export default pagination => {
  const paginationData = [];

  ["first", "last", "pageNumber", "itemsPerPage"].forEach(param => {
    if (pagination[param]) {
      paginationData.push(`${param}: ${pagination[param]}`);
    }
  });

  return paginationData.length > 0 ? paginationData.join(",") : `first: 100`;
};
