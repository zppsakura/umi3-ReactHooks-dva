import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { 
        path: '/', 
        redirect: '/register', 
    },
    { 
        exact: true, 
        path: '/register', 
        component: '@/pages/Register' 
    },
  ],
  fastRefresh: {},
});
