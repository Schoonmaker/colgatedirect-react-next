/* eslint-disable */
const nextRoutes = require('next-routes');

const routes = nextRoutes()
  .add({
    name: 'HomePage',
    pattern: '/',
    page: 'index',
  })
  .add({
    name: 'ProductPage',
    pattern: '/products/:handle',
    page: 'product'
  })
  .add({
    name: 'WhiteningKit',
    pattern: '/whitekit',
    page: 'whitekit'
  });
export default routes;
