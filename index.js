// 从income模块导入addIncome函数，这个函数是用来增加收入的
const addIncome = require('./modules/income')
// 从expense模块导入addExpense函数，这个函数是用来记录支出的
const {addExpense} = require('./modules/expense')

// 定义一个balance变量，用来存储当前的余额，初始值设为0
let balance = 0;

// 空行，为了让代码看起来更清楚

// 调用addIncome函数，往余额里加1000块钱，备注是'工资'
addIncome(balance, 1000, '工资')
// 调用addExpense函数，从余额里减去998块钱，备注是'买衣服'
addExpense(balance, 998, '买衣服')

