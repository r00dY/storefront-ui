const routes = require("next-routes")();

routes.add("product-page", "/p/:productSku/:variantSku", "productGRAPHQL");
routes.add("product-list", "/category/:id", "collectionGRAPHQL");

module.exports = routes;
