import Mock from 'mockjs'
const Random = require('mockjs').Random;

//使用mockjs模拟数据
// Mock.mock('/msdk/proxy/query_common_credit', {
//     "ret":0,
//     "data":
//       {
//         "mtime": "@datetime",//随机生成日期时间
//         "score|1-800": 800,//随机生成1-800的数字
//         "rank|1-100":  100,//随机生成1-100的数字
//         "stars|1-5": 5,//随机生成1-5的数字
//         "nickname": "@cname",//随机生成中文名字
//       }
// //data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
// });


Mock.mock('/msdk/proxy/query_common_credit', {
    "ret":0,
    "data":
      {
        "image":Random.image()
      }
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});

Mock.mock('/home', {
  "code":200,
  "data|10-20":[
    {
      // 贴吧名字
      "barname":'@cname',
      // 关注人数
      "concernnumber|60-100000":1,
      // 帖子数量
      "articlenumber|100-100000":1,
      // 文章标题
      "bartitle":'@csentence(5)',
      // 评论数量
      "recommendnumber|60-1000":1,
      // 点赞数量
      "goodnumber|20-500":1,
      // 图片地址
      "imgeurl|0-3":["	https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG"],
      // 文章内容
      "paragraph":'@cparagraph(3)',
    
    }
  ]
    
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});


Mock.mock('/concern', {
  "code":200,
  "data|10-20":[
    {  
      // 发帖人姓名
      "authorname":'@cname',
      // 发帖时间
      "articletime|1-5":1,
      // 名字
      "articlename":'@cname',
      // 关注人数
      "concernnumber|60-100000":1,
      // 帖子数量
      "articlenumber|100-100000":1,
      // 文章标题
      "articletitle":'@csentence(5)',
      // 图片地址
      "imgeurl|0-1":["https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG"],
      // 文章内容
      "paragraph":'@cparagraph(3)',
      // 评论数量
      "recommendnumber|60-1000":1,
      // 点赞数量
      "goodnumber|20-500":1,
      // 贴吧名字
      "bartitle":'@cname',
    }
  ]
    
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});


Mock.mock('/live', {
  "code":200,
  "data|100-500":[
    {  
      // 直播人名字
      "livename":'@cname',
      // 直播人地理位置
      "livelocation":'@city(true)',
      // 观看人数
      "concernnumber|60-100000":1,
      // 背景图片地址
      "imgeurl|1":["https://rpic.douyucdn.cn/asrpic/220507/9375414_1318.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/695_1628.png/dy1",
    "https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-04-27_8882991d5bd78e244fdae330024d9b00.jpg/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/8751050_1623.png/dy1",
    "	https://rpic.douyucdn.cn/asrpic/220507/682821_1621.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/2947432_1621.png/dy1",
    "https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-02-08_e9acaf27db757f8e59b78403315dc994.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/5058232_1629.png/dy1",
    "	https://rpic.douyucdn.cn/asrpic/220507/10241086_1616.png/dy1",
    "	https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-04-25_442064254775043c7a30ed79933ee38a.jpg/dy1",
    "https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-05-07_ad15c97b8f082d12b2449079076c3571.jpg/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/748396_1628.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/5526219_1629.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/290935_1628.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/5727882_1629.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/5716430_1629.png/dy1",
    "https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-04-02_343072affcffa69cb8c93f89abda067a.jpg/dy1",
    "https://rpic.douyucdn.cn/live-cover/appCovers/2021/05/30/8964416_20210530144820_small.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…1936be0a56c42f3d0e9097958671e51_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…090729add894c598f329c38a8912337_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…18a87d63535fe00b4509ed5079fe03e_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…cee9e6af8a3f08bfd2d8a9af800233a_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…98faa4192fd4095d19969c1401c5943_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2021…5bc442f267c72eeb8bf8de027368c9d_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…c8cb18ff365580006fddd00da1ef507_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2022/05/01/10415314_20220501132630_small.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…465c23617999f46f2c93ddf28ac87fd_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2021…ca72970c3c8ad02be869f433f4dd74c_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…88a29f507c64d238734a261fdff60ba_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…0ac9318ac74337cf862deaa9902a760_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…0ac9318ac74337cf862deaa9902a760_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…fe8848d16b172ecb6b423ee580bbfea_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…a4500bba642e715f4a0c93c26aef4f8_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2021…5c62de6694b9505e2f6993ed8ea2278_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…d5122a9f040fa54b0f65157cb310fef_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…9a06aa68f9711db60f506c19bfafbcb_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…39b391a7f66e9369787e580e008cd0a_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…c74d0cff1bf279c9b87c2b237efcbd5_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2022/03/07/9418394_20220307065537.jpg/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2021/10/25/1635142405-61764b05c3fe3.jpeg/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/appCovers/2021/05/29/7676065_20210529171856.jpg/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/appCovers/2022/01/04/8343812_20220104191116.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2021/09/01/6438956_20210901211650.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2021/06/06/9844592_20210606230528.jpg/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/appCovers/2022/04/06/9214928_20220406222937.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2022/04/16/43_20220416192738.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2022/04/01/8132384_20220401194030.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022/02/21/1645415899-62130ddb38104.jpeg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2022/03/08/10409418_20220308202258.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2021/08/10/1628575741-611217fd583de.jpeg/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/appCovers/2022/03/30/10382522_20220330161653.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2021/09/02/8347826_20210902205953.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2021/09/01/8943047_20210901205717.jpg/webpdy1.5",],
    }
  ]
    
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});


// 进入贴吧
Mock.mock('/upgrade', {
  "code":200,
  "data":
    {  
      "bared|5":[
        {
          // 未读消息
          "disread|1-100":1,
          // 贴吧名字
          "barname":'@cname',
          // 关注人数
          "concernnumber|60-100000":1,
        }
      ],
      "barconcerned|10-20":[
        {
          // 未读消息
          "disread|1-100":1,
          // 贴吧名字
          "barname":'@cname',
          // 关注人数
          "concernnumber|60-100000":1,
          // 等级
          "level|1-20":1,
          "color":function () {
            if (this.level <= 3) {
              return "#6ad9b4"
            } else if ( this.level > 3 && this.level <= 7) {
              return "#6da7fc"
            } else {
              return "#fb7e33"
            }
          }
        }
      ],
      "barhot|30-60":[
        {
          // 贴吧名字
          "barname":'@cname',
          // 关注人数
          "concernnumber|60-100000":1,
          // 帖子数量
          "articlenumber|100-100000":1,
          // 图片
          "imgarray|5":[
            {
              // 文章标题
              "articletitle":'@csentence(5)',
              "imgeurl|1":["https://rpic.douyucdn.cn/asrpic/220507/9375414_1318.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/695_1628.png/dy1",
    "https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-04-27_8882991d5bd78e244fdae330024d9b00.jpg/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/8751050_1623.png/dy1",
    "	https://rpic.douyucdn.cn/asrpic/220507/682821_1621.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/2947432_1621.png/dy1",
    "https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-02-08_e9acaf27db757f8e59b78403315dc994.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/5058232_1629.png/dy1",
    "	https://rpic.douyucdn.cn/asrpic/220507/10241086_1616.png/dy1",
    "	https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-04-25_442064254775043c7a30ed79933ee38a.jpg/dy1",
    "https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-05-07_ad15c97b8f082d12b2449079076c3571.jpg/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/748396_1628.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/5526219_1629.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/290935_1628.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/5727882_1629.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/5716430_1629.png/dy1",
    "https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-04-02_343072affcffa69cb8c93f89abda067a.jpg/dy1",
    "https://rpic.douyucdn.cn/live-cover/appCovers/2021/05/30/8964416_20210530144820_small.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…1936be0a56c42f3d0e9097958671e51_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…090729add894c598f329c38a8912337_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…18a87d63535fe00b4509ed5079fe03e_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…cee9e6af8a3f08bfd2d8a9af800233a_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…98faa4192fd4095d19969c1401c5943_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2021…5bc442f267c72eeb8bf8de027368c9d_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…c8cb18ff365580006fddd00da1ef507_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2022/05/01/10415314_20220501132630_small.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…465c23617999f46f2c93ddf28ac87fd_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2021…ca72970c3c8ad02be869f433f4dd74c_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…88a29f507c64d238734a261fdff60ba_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…0ac9318ac74337cf862deaa9902a760_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…0ac9318ac74337cf862deaa9902a760_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…fe8848d16b172ecb6b423ee580bbfea_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…a4500bba642e715f4a0c93c26aef4f8_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2021…5c62de6694b9505e2f6993ed8ea2278_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…d5122a9f040fa54b0f65157cb310fef_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…9a06aa68f9711db60f506c19bfafbcb_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022…39b391a7f66e9369787e580e008cd0a_big.png/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2022…c74d0cff1bf279c9b87c2b237efcbd5_big.png/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2022/03/07/9418394_20220307065537.jpg/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/roomCover/2021/10/25/1635142405-61764b05c3fe3.jpeg/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/appCovers/2021/05/29/7676065_20210529171856.jpg/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/appCovers/2022/01/04/8343812_20220104191116.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2021/09/01/6438956_20210901211650.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2021/06/06/9844592_20210606230528.jpg/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/appCovers/2022/04/06/9214928_20220406222937.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2022/04/16/43_20220416192738.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2022/04/01/8132384_20220401194030.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2022/02/21/1645415899-62130ddb38104.jpeg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2022/03/08/10409418_20220308202258.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/roomCover/2021/08/10/1628575741-611217fd583de.jpeg/webpdy1.5",
    "https://rpic.douyucdn.cn/live-cover/appCovers/2022/03/30/10382522_20220330161653.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2021/09/02/8347826_20210902205953.jpg/webpdy1.5",
    "	https://rpic.douyucdn.cn/live-cover/appCovers/2021/09/01/8943047_20210901205717.jpg/webpdy1.5",]
            }
          ]
        }
      ]
    }
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});


// 贴吧模块
Mock.mock('/module', {
  "code":200,
  "data|30":[
    {  
      // 贴吧名字
      "bartitle":'@cname(2)',
    }
  ]
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});

// 贴吧信息
Mock.mock('/barinfo', {
  "code":200,
  "data|50":[
    {  
      // 关注人数
      "concernnumber|60-100000":1,
      // 帖子数量
      "articlenumber|100-100000":1,
      // 图片地址
      "imgeurl|0-1":["https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG"],
      // 贴吧名字
      "bartitle":'@cname',
    }
  ]
    
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});

// 信息
Mock.mock('/chat', {
  "code":200,
  "data|10":[
    { 
      // 消息来源
      "infosource":'@csentence(5)',
      // 消息简要
      "infoparagraps":'@csentence(20)',
      // 几天前
      "infotime|1-7":1,
      // 消息数量
      "infonnumber|10-60":1,
      "bartitle":'@cname',
    }
  ]
    
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});

// 模拟联系人名字
Mock.mock('/chatname', {
  "code":200,
  "data|10":[
    { 
      "chatname":'@cname',
    }
  ]
    
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});
