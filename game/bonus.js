var a = 0

module.exports = {
    newTask(req) {
        console.log(req.data)
        return ++a
    }
}