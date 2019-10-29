webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @commerce-ui/core/Grid */ "./node_modules/@commerce-ui/core/Grid/index.js");
/* harmony import */ var _commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _commerce_ui_core_Root__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @commerce-ui/core/Root */ "./node_modules/@commerce-ui/core/Root/index.js");
/* harmony import */ var _commerce_ui_core_Root__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Root__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_MainTabBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/MainTabBar */ "./components/MainTabBar/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-apollo */ "../node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _lib_with_apollo_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/with-apollo-client */ "./lib/with-apollo-client.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _components_MenuDesktop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/MenuDesktop */ "./components/MenuDesktop/index.js");
/* harmony import */ var _commerce_ui_core_Device__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @commerce-ui/core/Device */ "./node_modules/@commerce-ui/core/Device/index.js");
/* harmony import */ var _commerce_ui_core_Device__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Device__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../data */ "./data/index.js");
/* harmony import */ var _helpers_cookie__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../helpers/cookie */ "./helpers/cookie.js");
/* harmony import */ var _actions_fetchCheckout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../actions/fetchCheckout */ "./actions/fetchCheckout.js");
/* harmony import */ var _actions_createEmptyCheckout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../actions/createEmptyCheckout */ "./actions/createEmptyCheckout.js");
/* harmony import */ var _lib_CheckoutContext__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../lib/CheckoutContext */ "./lib/CheckoutContext.js");
/* harmony import */ var _helpers_routerPush__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../helpers/routerPush */ "./helpers/routerPush.js");











var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                        padding-top: 70px;\n                      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                        position: fixed;\n                        bottom: 0;\n                        left: 0;\n                        width: 100%;\n                      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                        margin-bottom: 50px;\n                      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










/** @jsx jsx */











var tabs = [{
  label: "Home",
  icon: "home"
}, {
  label: "Menu",
  icon: "menu"
}, {
  label: "Favs",
  icon: "favs"
}, {
  label: "Basket",
  icon: "basket"
}, {
  label: "Profile",
  icon: "profile"
}];
var menuData = [{
  label: "Home",
  href: "/category",
  content: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_21__["MenuDesktopContent"], {
    category: _data__WEBPACK_IMPORTED_MODULE_24__["default"].categories[0],
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })
}, {
  label: "Beauty",
  href: "/category",
  content: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_21__["MenuDesktopContent"], {
    category: _data__WEBPACK_IMPORTED_MODULE_24__["default"].categories[1],
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  })
}, {
  label: "Food",
  href: "/category",
  content: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_21__["MenuDesktopContent"], {
    category: _data__WEBPACK_IMPORTED_MODULE_24__["default"].categories[2],
    index: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })
}, {
  label: "Health",
  href: "/category",
  content: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_21__["MenuDesktopContent"], {
    category: _data__WEBPACK_IMPORTED_MODULE_24__["default"].categories[3],
    index: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })
}];

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(MyApp, _App);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref, apollo) {
        var Component, ctx, pageProps, checkout;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                _context.next = 8;
                return MyApp.createCheckout(apollo, ctx);

              case 8:
                checkout = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  noRoot: ctx.query.noRoot !== undefined,
                  checkout: checkout
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x, _x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "createCheckout",
    value: function () {
      var _createCheckout = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(client, ctx) {
        var _ref2, _data, _ref3, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!client.cache.data.data.Checkout) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", client.cache.data.data.Checkout);

              case 2:
                if (!(!client.cache.data.data.Checkout && Object(_helpers_cookie__WEBPACK_IMPORTED_MODULE_25__["parseCookies"])(ctx).checkoutId)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return Object(_actions_fetchCheckout__WEBPACK_IMPORTED_MODULE_26__["default"])(client, Object(_helpers_cookie__WEBPACK_IMPORTED_MODULE_25__["parseCookies"])(ctx).checkoutId);

              case 5:
                _ref2 = _context2.sent;
                _data = _ref2.data;
                return _context2.abrupt("return", _data.node);

              case 8:
                _context2.next = 10;
                return Object(_actions_createEmptyCheckout__WEBPACK_IMPORTED_MODULE_27__["default"])(client);

              case 10:
                _ref3 = _context2.sent;
                data = _ref3.data;
                Object(_helpers_cookie__WEBPACK_IMPORTED_MODULE_25__["setCookie"])(ctx, "checkoutId", data.checkoutCreate.checkout.id);
                return _context2.abrupt("return", data.checkoutCreate.checkout);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createCheckout(_x3, _x4) {
        return _createCheckout.apply(this, arguments);
      }

      return createCheckout;
    }()
  }]);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          apolloClient = _this$props.apolloClient;
      var content = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }));
      var showTabbar = Component.tabbar !== undefined && !this.props.noRoot;
      var hideDesktopMenu = Component.hideDesktopMenu === true;
      var desktopMenuTransparentAtTop = Component.desktopMenuTransparentAtTop === true;
      var showFooterOnMobile = Component.showFooterOnMobile === true;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_lib_CheckoutContext__WEBPACK_IMPORTED_MODULE_28__["InjectCheckoutContext"], {
        checkout: this.props.checkout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_17__["ApolloProvider"], {
        client: apolloClient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_18__["ApolloProvider"], {
        client: apolloClient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_commerce_ui_core_Root__WEBPACK_IMPORTED_MODULE_15___default.a, {
        theme: _theme__WEBPACK_IMPORTED_MODULE_14__["theme"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["GridDebugger"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_commerce_ui_core_Device__WEBPACK_IMPORTED_MODULE_22___default.a, {
        mobile: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, showTabbar && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])("div", {
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["css"])(_templateObject()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, content, showFooterOnMobile && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_Footer__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])("div", {
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["css"])(_templateObject2()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_MainTabBar__WEBPACK_IMPORTED_MODULE_16__["default"], {
        data: tabs,
        active: Component.tabbar,
        onChange: function onChange(index) {
          if (index === 0) {
            Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_29__["default"])("/");
          } else if (index === 1) {
            Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_29__["default"])("/menu");
          } else if (index === 2) {
            Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_29__["default"])("/wishlist");
          } else if (index === 3) {
            Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_29__["default"])("/cart");
          } else if (index === 4) {
            Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_29__["default"])("/profile");
          }
        },
        scrollable: false,
        align: "fit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }))), !showTabbar && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, content, showFooterOnMobile && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_Footer__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_commerce_ui_core_Device__WEBPACK_IMPORTED_MODULE_22___default.a, {
        desktop: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, hideDesktopMenu && content, !hideDesktopMenu && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_21__["default"], {
        data: menuData,
        mode: "fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])("div", {
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["css"])(_templateObject3()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, content, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_Footer__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }))))))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_12___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_apollo_client__WEBPACK_IMPORTED_MODULE_19__["default"])(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.0955e0b361a9115b0890.hot-update.js.map