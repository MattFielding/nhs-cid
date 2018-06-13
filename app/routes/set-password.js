module.exports = function (router) {
  router.get('/create-account/set-password', function (req, res) {
    // pull in the url parameter
    var vouched = req.param('vouch')
    // re-render the page along with the parameter
    res.render('create-account/set-password', {vouch: vouched}, function(err, html) {
      res.send(html)
    })
  })

    router.get('/create-account/v9/set-password', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('create-account/v9/set-password', {service: service, serviceName: serviceName, hidehead: hidehead, vouch: vouched}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/mvp/set-password', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('create-account/mvp/set-password', {service: service, serviceName: serviceName, hidehead: hidehead, vouch: vouched}, function(err, html) {
            res.send(html)
        })
    })

  router.get('/create-account/v7/set-password', function (req, res) {
    // pull in the url parameter
    var vouched = req.param('vouch')
    // re-render the page along with the parameter
    res.render('create-account/v7/set-password', {vouch: vouched}, function(err, html) {
      res.send(html)
    })
  })

    router.get('/create-account/v6/set-password', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // re-render the page along with the parameter
        res.render('create-account/v6/set-password', {vouch: vouched}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v5/set-password', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // re-render the page along with the parameter
        res.render('create-account/v5/set-password', {vouch: vouched}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v4/set-password', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // re-render the page along with the parameter
        res.render('create-account/v4/set-password', {vouch: vouched}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/set-password', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // re-render the page along with the parameter
        res.render('create-account/v3/set-password', {vouch: vouched}, function(err, html) {
            res.send(html)
        })
    })
}