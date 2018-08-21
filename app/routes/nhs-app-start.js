module.exports = function (router) {
    router.get('/start/v5/nhs-app-start', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        // re-render the page along with the parameter
        res.render('start/v5/nhs-app-start', { service: service, serviceName: serviceName, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/start/v4/nhs-app-start', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        // re-render the page along with the parameter
        res.render('start/v4/nhs-app-start', { service: service, serviceName: serviceName, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/start/pb/nhs-app-start', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var devMode = req.param('devMode')
        // re-render the page along with the parameter
        res.render('start/pb/nhs-app-start', { service: service, serviceName: serviceName, devMode: devMode}, function(err, html) {
            res.send(html)
        })
    })
}