var a = 0

module.exports = {
    newTask(req) {
        console.log(JSON.stringify(req.body))
        console.log(JSON.stringify(req.params))
        console.log(JSON.stringify(req.query))
        console.log(JSON.stringify(req.headers))
        return ++a
    }
}