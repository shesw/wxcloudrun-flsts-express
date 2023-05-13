var totalCost = 100
var bonusRate = 10
var perChip = 10
var playerCount = 10

function calculate(rc, pay) {
    var totalAverage = 1.0 * totalCost / playerCount
    var bonusCost = 0.01 * totalCost * bonusRate
    var costOnPerChip = bonusCost / (perChip * playerCount)

    var winBonus = (rc - perChip) * costOnPerChip

    var res1 = totalAverage - winBonus

    return "每位玩家平均账单为" + totalAverage + "元，你为自己赢得的彩头钱为" + winBonus + "元，除去已支付金额，你还需支付" + (res1 - pay).toFixed(2) + "元"

}

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
        var pay = req.query.pay
        return "本次活动的总支出为" + totalCost + "元, \n其中有" + bonusRate + "%作为游戏彩头。\n玩家每人分到的平均筹码数为" + perChip + ", \n玩家总数为：" + playerCount + "\n你的剩余筹码为：" + remainChip + ", \n已支付的金额为：" + pay + ",\n因此: " + calculate(remainChip, pay)
    }
}