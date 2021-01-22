module.exports = [
  {
    path: '/',
    redirect: '/register',
  },
  {
    exact: true,
    path: '/register',
    component: './Register',
  },
  {
    exact: true,
    path: '/login',
    component: './Login',
  },
  {
    exact: true,
    path: '/list',
    component: './List',
  },
  {
    component: './Exception/404',
  },
];
