module.exports = function (router) {
    router.get('/service-access/service-access-video-selfie-camera', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var pinCode1 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode2 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode3 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode4 = Math.floor(0 + (9 - 0) * Math.random())
        var challenge = req.param('challenge')

        var pinCode = pinCode1 + ' ' + pinCode2 + ' ' + pinCode3 + ' ' + pinCode4
        // re-render the page along with the parameter
        res.render('service-access/service-access-video-selfie-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v9/service-access-video-selfie-camera', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var pinCode1 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode2 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode3 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode4 = Math.floor(0 + (9 - 0) * Math.random())
        var challenge = req.param('challenge')

        var pinCode = pinCode1 + ' ' + pinCode2 + ' ' + pinCode3 + ' ' + pinCode4
        // re-render the page along with the parameter
        res.render('service-access/v9/service-access-video-selfie-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v8/service-access-video-selfie-camera', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var pinCode1 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode2 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode3 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode4 = Math.floor(0 + (9 - 0) * Math.random())
        var challenge = req.param('challenge')

        var pinCode = pinCode1 + ' ' + pinCode2 + ' ' + pinCode3 + ' ' + pinCode4
        // re-render the page along with the parameter
        res.render('service-access/v8/service-access-video-selfie-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/mvp/service-access-video-selfie-camera', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var pinCode1 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode2 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode3 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode4 = Math.floor(0 + (9 - 0) * Math.random())
        var challenge = req.param('challenge')

        var pinCode = pinCode1 + ' ' + pinCode2 + ' ' + pinCode3 + ' ' + pinCode4
        // re-render the page along with the parameter
        res.render('service-access/mvp/service-access-video-selfie-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v4/service-access-video-selfie-camera', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var pinCode1 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode2 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode3 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode4 = Math.floor(0 + (9 - 0) * Math.random())
        var challenge = req.param('challenge')

        var pinCode = pinCode1 + ' ' + pinCode2 + ' ' + pinCode3 + ' ' + pinCode4
        // re-render the page along with the parameter
        res.render('service-access/v4/service-access-video-selfie-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v3/service-access-video-selfie-camera', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/v3/service-access-video-selfie-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, changetomobile: changetomobile, mobile: isMobile }, function(err, html) {
            res.send(html)
        })
    })
}
