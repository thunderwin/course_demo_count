const moment = require('moment')

function addIncome(balance,amount, description) {
    balance = balance + amount;
    console.log(moment().format('YYYY-MM-DD') + " 收入" + amount + "元，" + description);
    console.log("余额：" + balance + "元");
}

module.exports = addIncome