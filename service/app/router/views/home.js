'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/home/index', controller.views.home.index);
};
