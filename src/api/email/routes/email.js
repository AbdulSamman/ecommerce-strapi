'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/api/email',
      handler: 'email.index',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
