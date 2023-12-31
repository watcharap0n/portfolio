export default (req, res, next) => {
    let fullPath = req.url
    if (fullPath.indexOf('../../') >= 0 || fullPath.indexOf('..%2F..%2F') >= 0) {
        res.writeHead(301, {Location: "/404"});
        res.end();
    }
    console.log(req.url)
    next()
}