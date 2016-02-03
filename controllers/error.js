exports.registerRoutes = function(app) {
  
  // 404 Error catch-all requests
  app.use(function(req, res, next) {
    res.status(404);
    res.render('errors/404');
  });

  // 500 Internal Server Error catch
  app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500);
    res.render('errors/500');
  });
};
