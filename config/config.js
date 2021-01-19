import { defineConfig } from 'umi';
import pageRoutes from './router.config';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    dva: {},
    antd: {},
    routes: pageRoutes,
    fastRefresh: {},
    theme: {
        'primary-color': '#6280f5',
        'table-header-bg': '#e9eaeb',
        'table-row-hover-bg': '#f1f3fb',
        'border-color-base': '#e6eaef',
        'heading-color': '#232426',
        'text-color': '#2f3336',
        'text-color-secondary': '#5c6268',
    },
});