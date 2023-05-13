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
    },
    query(req) {
        var remainChip = req.query.remainChip
        var pay = requ.query.pay
        return "本次活动的总支出为" + totalCost + "元, \n其中有" + bonusRate + "%作为游戏彩头。\n玩家每人分到的平均筹码数为" + perChip + ", \n玩家总数为：" + playerCount + "\n你的剩余筹码为：" + remainChip + ", \n已支付的金额为：" + pay + ",\n因此你还需要支付的金额为" + calculate(remainChip, pay)
    },
    calculate(rc, pay) {
        var totalAverage = 1.0 * totalCost / playerCount
        var bonusCost = 0.01 * totalCost * bonusRate
        var costOnPerChip = bonusCost / (perChip * playerCount)

        var res1 = totalAverage - (rc - perChip) * costOnPerChip

        return (res1 - pay).toFixed(2)

    }
}