var totalCost = 0
var bonusRate = 0
var perChip = 0
var playerCount = 0

module.exports = {
    newTask(req) {
        console.log("params: " + JSON.stringify(req.params))
        console.log("body: " + JSON.stringify(req.body))
        console.log("query: " + JSON.stringify(req.query))
        totalCost = req.query.totalCost
        bonusRate = req.query.bonusRate
        perChip = req.query.perChip
        playerCount = req.query.playerCount
        return "totalCost=" + totalCost + ", bonusRate=" + bonusRate + ", perChip=" + perChip + ", playerCount=" + playerCount
    }
}