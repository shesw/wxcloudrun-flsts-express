var a = 0

module.exports = {
    newTask(req) {
        console.log(JSON.stringify(req.body().data))
        return ++a
    }
}