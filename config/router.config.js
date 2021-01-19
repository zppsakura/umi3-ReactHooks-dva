module.exports = [
    { 
        path: '/', 
        redirect: '/register', 
    },
    { 
        exact: true, 
        path: '/register', 
        component: './Register' 
    },
    { 
        exact: true, 
        path: '/login', 
        component: './Login' 
    },
    {
        component: './Exception/404',
    },
]
