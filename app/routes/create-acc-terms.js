const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (router) {
  router.get('/create-account/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/v9/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/v9/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v9/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v9/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/v9/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v9/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/v8/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/v8/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v8/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v8/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/v8/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v8/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/mvp/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/mvp/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/mvp/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/mvp/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/mvp/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/mvp/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/v7/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')

        if (vouched === 'yes') {
            res.redirect('/create-account/v7/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v7/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/create-account/v7/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/v7/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v7/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

    router.get('/create-account/v6/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')

        if (vouched === 'yes') {
            res.redirect('/create-account/v6/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v6/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v6/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/v6/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v6/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

    router.get('/create-account/v5/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')

        if (vouched === 'yes') {
            res.redirect('/create-account/v5/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v5/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v5/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/v5/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v5/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

    router.get('/create-account/v4/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')

        if (vouched === 'yes') {
            res.redirect('/create-account/v4/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v4/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v4/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/v4/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v4/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

    router.get('/create-account/v3/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')

        if (vouched === 'yes') {
            res.redirect('/create-account/v3/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v3/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v3/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/v3/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v3/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })
}