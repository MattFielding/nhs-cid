module.exports = function (router) {
  router.get('/patient-online/patient-online-linkage-key', function (req, res) {
      var vouched = req.param('vouch')
      var service = req.param('service')
      var serviceName = req.param('serviceName')
      var mobileNum = req.param('mobileNum')
      var emailAddress = req.param('emailAddress')
      var hidehead = req.param('hidehead')
      var poluser = req.param('poluser')
    res.render('patient-online/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/patient-online/v21/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var pyiuser = req.param('pyiuser')
        var manual = req.param('manual')
        res.render('patient-online/v21/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, pyiuser : pyiuser, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v20/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var pyiuser = req.param('pyiuser')
        var manual = req.param('manual')
        res.render('patient-online/v20/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, pyiuser : pyiuser, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v19/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var pyiuser = req.param('pyiuser')
        var manual = req.param('manual')
        res.render('patient-online/v19/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, pyiuser : pyiuser, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v18/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var pyiuser = req.param('pyiuser')
        res.render('patient-online/v18/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, pyiuser : pyiuser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v17/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var pyiuser = req.param('pyiuser')
        res.render('patient-online/v17/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, pyiuser : pyiuser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v16/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v16/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v15/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v15/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v14/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v14/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/patient-online/demo/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/demo/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v13/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v13/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v12/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v12/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v11/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v11/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v10/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v10/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/pb/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var pyiuser = req.param('pyiuser')
        res.render('patient-online/pb/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, pyiuser: pyiuser }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/patient-online/v9/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        res.render('patient-online/v9/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/patient-online/v8/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        res.render('patient-online/v8/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser, system: system }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/mvp/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.render('patient-online/mvp/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

  router.get('/patient-online/v7/patient-online-linkage-key', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var system = req.param('system')
    var hidehead = req.param('hidehead')
    res.render('patient-online/v7/patient-online-linkage-key', { serviceName: serviceName, service: service, system: system, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v6/patient-online-linkage-key', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/v6/patient-online-linkage-key', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v5/patient-online-linkage-key', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('patient-online/v5/patient-online-linkage-key', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}
