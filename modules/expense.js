const moment = require('moment')

// 函数：记录支出  
function addExpense(balance,amount, description) {
    balance = balance - amount;
    console.log(moment().format('YYYY-MM-DD HH:mm:ss') + " 支出" + amount + "元，" + description);
    console.log("余额：" + balance + "元");
    sayhi()
}

function sayhi() {
    console.log('hi')
}

function getExpense() {
    return balance
}

module.exports = {
    addExpense,
    sayhi
}
