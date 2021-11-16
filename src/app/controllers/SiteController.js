const Course = require('../models/Course.js')
class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({}, function (err, docs) {
            if (!err) {
                res.json(docs)
            } else {
                res.status(404).json({ error: 'ERROR!!!' })
            }
        })

        // res.render('home')
    }
    //   [Get] /search
    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController()
