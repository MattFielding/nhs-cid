module.exports = function (router) {
    router.get('/service-access/v13/service-access-challenge-3', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        //var challenge = req.param('challenge')
        //var pinCode = Math.floor(1000 + Math.random() * 9000)
        var pinCode1 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode2 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode3 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode4 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode = pinCode1 + ' ' + pinCode2 + ' ' + pinCode3 + ' ' + pinCode4
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var challenge = 'write'
        // re-render the page along with the parameter
        res.render('service-access/v13/service-access-video-selfie-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })
}