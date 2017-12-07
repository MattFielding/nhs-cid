const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (router) {
  router.get('/create-account/create-acc-terms', function (req, res) {
    // pull in the url parameters
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')

    if (vouched === 'yes') {
          res.redirect('/create-account/two-step-code?vouch=yes')
          return
      }
    // re-render the page along with the parameter
    res.render('create-account/create-acc-terms', {vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
    router.post('/create-account/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })
}