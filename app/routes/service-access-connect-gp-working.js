module.exports = function (router) {


    router.get('/service-access/v24/service-access-connect-gp-working', function (req, res) {
        var uplift = req.param('uplift')
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var resend = req.param('resend')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var result = req.param('result')
        var manual = req.param('manual')
        res.render('service-access/v24/service-access-connect-gp-working', { uplift: uplift, reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, manual: manual }, function(err, html) {
            res.send(html)
        })
    })


    router.get('/service-access/v23/service-access-connect-gp-working', function (req, res) {
        var uplift = req.param('uplift')
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var resend = req.param('resend')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var result = req.param('result')
        var manual = req.param('manual')
        res.render('service-access/v23/service-access-connect-gp-working', { uplift: uplift, reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, manual: manual }, function(err, html) {
            res.send(html)
        })
    })


    router.get('/service-access/v22/service-access-connect-gp-working', function (req, res) {
        var uplift = req.param('uplift')
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var resend = req.param('resend')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var result = req.param('result')
        var manual = req.param('manual')
        res.render('service-access/v22/service-access-connect-gp-working', { uplift: uplift, reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v21/service-access-connect-gp-working', function (req, res) {
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var resend = req.param('resend')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var result = req.param('result')
        var manual = req.param('manual')
        res.render('service-access/v21/service-access-connect-gp-working', { reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v20/service-access-connect-gp-working', function (req, res) {
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var resend = req.param('resend')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var result = req.param('result')
        var manual = req.param('manual')
        res.render('service-access/v20/service-access-connect-gp-working', { reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v19/service-access-connect-gp-working', function (req, res) {
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var resend = req.param('resend')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var result = req.param('result')
        var manual = req.param('manual')
        res.render('service-access/v19/service-access-connect-gp-working', { reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, manual: manual }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v18/service-access-connect-gp-working', function (req, res) {
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
        res.render('service-access/v18/service-access-connect-gp-working', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v17/service-access-connect-gp-working', function (req, res) {
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
        res.render('service-access/v17/service-access-connect-gp-working', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v16/service-access-connect-gp-working', function (req, res) {
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
        res.render('service-access/v16/service-access-connect-gp-working', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v15/service-access-connect-gp-working', function (req, res) {
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
        res.render('service-access/v15/service-access-connect-gp-working', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v14/service-access-connect-gp-working', function (req, res) {
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
        res.render('service-access/v14/service-access-connect-gp-working', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/demo/service-access-connect-gp-working', function (req, res) {
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
        res.render('service-access/demo/service-access-connect-gp-working', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v13/service-access-connect-gp-working', function (req, res) {
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
        res.render('service-access/v13/service-access-connect-gp-working', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v12/service-access-connect-gp-working', function (req, res) {
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
        res.render('service-access/v12/service-access-connect-gp-working', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/pb/service-access-connect-gp-working', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/pb/service-access-connect-gp-working', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
}
