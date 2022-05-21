 //vant设计稿为375，当以750设计稿为基础设置时，需要屏蔽vant
 module.exports = {
    "plugins": {
      "autoprefixer": {},
      'postcss-pxtorem': {
        rootValue: 37.5, // 75表示750设计稿，37.5表示375设计稿
        propList: ['*'],
        selectorBlackList: ['van'],  //过滤掉van不进行rem转换
        exclude: /node_module|pc/i,
      }
    }
  }
