var jsonData = require('../json/dataFirst.json');

module.exports = function(req, res, next) {
    res.render('index', jsonData);
};

