export const API = "http://localhost:8000/products";

export let LIMIT = 8;

export const ACTIONS = {
  products: "products",
  oneProduct: "oneProduct",
  pageTotalCount: "pageTotalCount",
  cart: "cart",
  cartLength: "cartLength",
  user: "user",
};

export const ADMINS = ["alkash@bk.ru"];

const mediaQuery = window.matchMedia("(max-width: 600px)");

if (mediaQuery.matches) {
  LIMIT = 1;
}

const mediaQueryA = window.matchMedia("(width: 768px)");

if (mediaQueryA.matches) {
  LIMIT = 4;
}

const mediaQueryB = window.matchMedia("(width: 1024px)");

if (mediaQueryB.matches) {
  LIMIT = 4;
}
