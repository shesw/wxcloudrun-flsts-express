var a = 0

module.exports = {
    newTask(req) {
        console.log(JSON.stringify(req))
        return ++a
    }
}