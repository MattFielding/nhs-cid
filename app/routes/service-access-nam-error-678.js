module.exports = function (router) {
    router.get('/service-access/v19/service-access-nam-error-678', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v19/service-access-nam-error-678', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v18/service-access-nam-error-678', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v18/service-access-nam-error-678', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/pb/service-access-nam-error-678', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/pb/service-access-nam-error-678', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
}