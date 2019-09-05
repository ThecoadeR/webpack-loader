// 编写loader的时候 不可以写箭头函数 因为会有this指向的问题
// 可以在webpack.config.js里配置loader的一些options 然后通过这个function的this.query来获取 并使用
// 同时 有的时候 我们可能需要loader来返回多个参数 所以不能直接return 可以用this.callback这个官方API 第一个参数是error 第二个是内容 第三个是sourceMap 第四个是meta
// loader里如果需要执行一些异步的操作 可以利用 this.async 其实他最终执行的还是一个this.callback
// 如果需要使用多个loader的话 在webpack.config.js里按倒序配置即可 也就是 配置里的最后一个对象即是第一个执行的loader 执行顺序自下而上的执行

module.exports = function (source) {
  // return source.replace('hello', 'hi')
  // return source.replace('world', this.query.name)
  // 显示的声明一下 callback 表示这个loader里有异步的操作
  const callback = this.async()
  setTimeout(() => {
    const result = source.replace('world', this.query.name)
    callback(null, result)
  }, 3000)
}