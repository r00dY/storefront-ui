import Router from "next/router";

export default (arg1, arg2) => {
  Router.push(arg1, arg2).then(() => window.scrollTo(0, 0));
};
