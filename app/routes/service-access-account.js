// var fs = require('fs')
// var tasklist = require('./service-access-eredbook')

// fs.readFile('./service-access-eredbook.json', 'utf8', function (err, data) {
//     data = JSON.parse(data)
//     for(i = 0; i < data.length; i++) {
//         var task = new tasklist()
//         task.title = data[i].title
//         task.description = data[i].description
//         task.url = data[i].url
//         task.save(function (err) {})
//     }
// })

// fs.readFile('./service-access-eredbook.json', 'utf8', function (err, data) {
//     for(var item of data) {
//         console.log('item: ', [item.title])
//     }
// })

module.exports = function (router) {
    router.get('/service-access/service-access-account', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('service-access/service-access-account', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
}