## export default/export  
1. export default只能有一个，export可以有多个
2. export default直接+已有的常量，函数，文件，模块等，export需要 命名变量=已有的常量，函数，文件，模块等
3. export导出的数据在import导入时需要使用{},且{}内的所有变量名需要和export导出时的命名相同  
  export default不需要使用{},且导出时的变量名不固定  
## JS字符串和对象之间的转换
1. 对象转为字符串 JSON.stringify(object)
2. 字符串转为对象 JSON.parse(str)
## Promise
+ 一个构造函数 他会进行异步操作(调用回调函数(resolve,reject)=>{})  
    通常放在一个函数内，当调用函数时执行new Promise  
    执行回调函数 回调函数有resolve和reject两个参数 它们是函数名(相当于回调函数)  
    执行完回调函数 成功时执行resolve函数 修改Promise状态为fulfilled(resolved)  
    失败时执行reject函数 修改Promise状态为rejected  
+ 三种状态：ending（进行中）、fulfilled/resolved（已成功）和rejected（已失败）  
+ 自身拥有all、race、reject、resolve方法
    1. Promise.all([promiseClick3(), promiseClick2(), promiseClick1()])  
    all接收一个数组参数，这组参数都为Promise对象或能返回Promise对象的方法  
    数组内的方法参数将并行(同时)执行 当全部方法执行后返回一个新Promise对象  
    新Promise对象的状态等于所有方法返回Promise对象状态的与  
    新Promise对象的状态为resolved时，值为由所有方法resolve的值组成的数组  
    新Promise对象的状态为rejected时，值为最先失败(reject)的原因  
    2.  Promise.race([promiseClick3(), promiseClick2(), promiseClick1()])  
    数组内的方法参数将并行(同时)执行 race返回一个新Promise对象 来源于最先执行完的参数函数返回的Promise对象  
    其他未执行完的函数继续执行  
+ 原型上有then、catch等方法  
    1. then(onFulfilled, onRejected) 接受的两个参数都是回调函数  
        + 第一个回调函数onFulfilled是调用该then方法的Promise对象状态为fulfilled(resolved)时调用  
            此回调函数接受的参数(res)是Promise对象中resolve时的值(res.data)  
        + 第二个回调函数onRejected是状态为rejected时调用 此回调函数接受一个参数是reject时的值(失败的原因)  
        + then返回一个Promise对象  
            如果回调函数返回的是Promise对象，then返回的对象的状态和值与回调函数返回的一致   
            如果回调函数返回不是Promise，则then返回的对象的状态为resolved，且值为回调函数返回的值或undefined
    2. catch(onRejected) 相当于then中的第二个回调函数  
        同时还能捕获then中执行时的异常情况  