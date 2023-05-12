var a = 0

module.exports = {
    newTask(params) {
        console.log(params)
        return ++a
    }
}