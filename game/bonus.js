var totalCost = 100
var bonusRate = 10
var perChip = 10
var playerCount = 10

function calculate(rc, pay) {
    var totalAverage = playerCount == 0 ? 0 : 1.0 * totalCost / playerCount
    var bonusCost = 0.01 * totalCost * bonusRate
    var costOnPerChip = 0
    if ((perChip * playerCount) != 0) {
        costOnPerChip = bonusCost / (perChip * playerCount)
    }

    var winBonus = (rc - perChip) * costOnPerChip

    var res1 = totalAverage - winBonus

    return "每位玩家平均账单为" + totalAverage.toFixed(2) + "元，你为自己赢得的彩头钱为" + winBonus.toFixed(2) + "元，除去已支付金额，你还需支付" + (res1 - pay).toFixed(2) + "元"

}

module.exports = {
    newTask(req) {
        console.log("query: " + JSON.stringify(req.query))
        totalCost = req.query.totalCost ? req.query.totalCost : 0
        bonusRate = req.query.bonusRate ? req.query.bonusRate : 0
        perChip = req.query.perChip ? req.query.perChip : 0
        playerCount = req.query.playerCount ? req.query.playerCount : 0
        return "totalCost=" + totalCost + ", bonusRate=" + bonusRate + ", perChip=" + perChip + ", playerCount=" + playerCount
    },
    query(req) {
        var remainChip = req.query.remainChip ? req.query.remainChip : 0
        var pay = req.query.pay ? req.query.pay : 0
        return "本次活动的总支出为" + totalCost + "元, \n其中有" + bonusRate + "%作为游戏彩头。\n玩家每人分到的平均筹码数为" + perChip + ", \n玩家总数为：" + playerCount + "\n你的剩余筹码为：" + remainChip + ", \n已支付的金额为：" + pay + ",\n因此: " + calculate(remainChip, pay)
    }
}