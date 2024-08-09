module.exports = function (req, res, next) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8')
    next()
}