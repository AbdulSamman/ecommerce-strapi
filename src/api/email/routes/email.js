'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/email',
      handler: 'email.index',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
