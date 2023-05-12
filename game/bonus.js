var totalCost = 0
var bonusRate = 0
var perChip = 0
var playerCount = 0

module.exports = {
    newTask(req) {
        console.log(JSON.stringify(req.params))
        totalCost = req.params.totalCost
        bonusRate = req.params.bonusRate
        perChip = req.params.perChip
        playerCount = req.params.playerCount
        return "totalCost=" + totalCost + ", bonusRate=" + bonusRate + ", perChip=" + perChip + ", playerCount=" + playerCount
    }
}