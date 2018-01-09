// notify integration
let apiKey = 'cidprototype-96856a46-bebf-4032-881a-d7b35262e5c8-8433d391-d07a-484d-86b0-0406a2203a01'
let templateId = '4b003bbb-b94f-43db-abee-d407f0e9300d'
let smsSender = '8e63067f-0698-45d5-ac59-946c2089c058'
const NotifyClient = require('notifications-node-client').NotifyClient, notifyClient = new NotifyClient(apiKey)

module.exports = function (router) {
  router.get('/create-account/two-step-code-pincode', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var terms = req.param('terms')
    var resend = req.param('resend')
    var mobileNum = req.param('mobileNum')
    var emailAddress = req.param('emailAddress')
    var pinCode = Math.floor(1000 + Math.random() * 9000)
    var personalisation = {
        'pincode': pinCode
    }
    // send text message

    if (mobileNum !== '' || mobileNum !== 'undefined') {
    notifyClient
        .sendSms(templateId, mobileNum, {
            personalisation: personalisation,
            smsSenderId: smsSender })
        .then(response => console.log(response))
    .catch(err => console.error(err))
    }
    // re-render the page along with the parameter
    res.render('create-account/two-step-code-pincode', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress }, function(err, html) {
      res.send(html)
    })
  })
}