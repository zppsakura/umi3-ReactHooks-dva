import Mock from 'mockjs'

export default {
    'GET /api/users/register': (req, res) => { 
        res.send({
            status: 'ok',
            currentAuthority: 'user',
          });
     },

     'GET /api/users': Mock.mock({
        'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
      }),
  };