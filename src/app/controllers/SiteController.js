const Course = require('../models/Course.js')
const { mutipleMongooseToObject } = require('../../ulti/mongoose')
class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                })
            })
            .catch(next)

        // res.render('home')
    }
    //   [Get] /search
    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController()
