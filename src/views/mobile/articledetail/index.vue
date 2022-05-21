<template>
    <div class="articledetail">
        <!-- 顶头部分 -->
        <div class="header">
            <van-icon name="arrow-left"  @click="retur"/>
            <div class="middle" @click="jump">
                <img src="https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG"
                alt="">
                <span>123</span>
            </div>
            <van-icon name="ellipsis" @click="showpopup"/>
            
            <van-popup class="popup" v-model="show"
            position="bottom" :overlay="true">
                <ul>
                    <li>
                        <p>
                            <van-icon name="user-circle-o" color="#535353" size="30px" class="icon"/>
                        </p>
                        <p>只看楼主</p>
                    </li>
                    <li>
                        <p>
                            <van-icon name="home-o" color="#535353" size="30px"/>
                        </p>
                        <p>排序筛选</p>
                    </li>
                    <li>
                        <p>
                            <van-icon name="exchange" color="#535353" size="30px"/>
                        </p>
                        <p>跳页</p>
                    </li>
                    <li>
                        <p>
                            <van-icon name="fire-o" color="#535353" size="30px"/>
                        </p>
                        <p>夜间模式</p>
                    </li>
                    <li>
                        <p>
                            <van-icon name="bulb-o" color="#535353" size="30px"/>
                        </p>
                        <p>举报</p>
                    </li>
                </ul>
                <!--  -->
                <van-slider v-model="fontvalue" :step="10" :min="10" :max="90" />
                <p class="span" @click="cancel">取消</p>
            </van-popup>
        </div>
        <!-- 内容部分 -->
        <div class="context">
            <!-- 用户发帖信息 -->
            <div class="userinfo">
                <div class="headercontext">
                    <p class="title">
                    恶人自由挑手
                    </p>
                    <div class="user">
                        <img src="https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG"
                        alt="" class="userphoto">
                        <div class="textinfo">
                            <p class="username">123</p>
                            <p class="articletime">123</p>
                        </div>
                        <button class="btn">关注</button>
                    </div>
                    <!-- 帖子内容 -->
                    <p class="paragraph">一个有趣的灵魂</p>
                    <!-- 帖子图片 -->
                    <img class="photo" src="https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG"
                    alt="">
                </div>
                <!-- 用户尾巴 -->
                <div class="usertail">
                    <p class="tail">一个有趣的灵魂</p>
                    <p class="tail">一个有趣的灵魂</p>
                    <p class="tail">一个有趣的灵魂</p>
                </div>
                
                <!-- 图标集合 -->
                <div class="icons">
                    <ul>
                      <li>
                          <a href="https://weixin.qq.com/" target="blank">
                              <img src="@/assets/img/weixin.jpg" alt="" class="img">
                              <p>微信好友</p>
                          </a>
                      </li>
                      <li>
                          <a href="https://im.qq.com/index" target="blank">
                              <img src="@/assets/img/qq.jpg" alt="" class="img">
                              <p>QQ好友</p>
                          </a>
                      </li>
                      <li>
                          <van-icon name="thumb-circle-o" size="40px" color="#585657"/>
                          <p>21</p>
                      </li>
                      <li>
                          <van-icon name="stop-circle-o" size="40px" color="#585657"/>
                          <p>踩</p>
                      </li>
                    </ul>
                </div>
                <!-- 去往贴吧详情 -->
                <div class="bardetail" @click="jump">
                    <div class="info">
                        <img class="img" src="https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG" alt="">
                        <div class="text">
                            <p>
                                <span>
                                    芙蓉帐暖吧
                                </span>
                            </p>
                            <p>
                                <span>关注</span>
                                <span>1.4kw</span>
                                <span>帖子</span>
                                <span>17w</span>
                            </p>
                        </div>
                        <!-- 图标 -->
                        <van-icon name="arrow" color="#a1a1a1" class="arrow" size="30px"/>
                    </div>
                </div>
                
            </div>
            
            <div class="advertisement" v-show="isshowadvertisement">
                <p class="text">你所梦想的高超竞技都在这里，专为手机设计，英雄操控精心改良</p>
                <img src="	https://game.gtimg.cn/images/lgamem/v2/overview/GameOverview_HowToPlay_4.jpg"
                alt="" class="img">
                <div class="link">
                    <div class="introduce">
                        <p>
                            <span>英雄联盟手游</span>
                            <span>版本4.0.0.0</span>
                        </p>
                        <p>
                            <span>深圳腾讯游戏有限公司</span>
                            <span>隐私</span>
                            <span>权限</span>
                        </p>
                    </div>
                    <p class="btn">
                        立即下载
                    </p>
                </div>
                <div class="bottomcancel">
                    <p>
                        <span>英雄联盟手游</span>
                        <span>广告</span>
                    </p>
                    <van-icon name="cross" color="#a9a9a9" size="15px" @click="hiddenadvertisement"/>
                </div>
            </div>

            <!-- 评论内容 -->
            <div class="commentinfo">
            </div>

            <!-- 输入框 -->
            <div class="bottom">
                <!-- 这是输入框 -->
                <div class="filedwidth">
                        <van-cell-group>
                            <van-field
                                size="40"
                                v-model="sms"
                                center
                                clearable
                                placeholder="我来抢楼"
                            >
                                <div slot="left-icon">
                                    <img src="https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG" alt="">
                                </div>
                            </van-field>
                        </van-cell-group>  
                </div>
                
                <!-- 图标 -->
                <div class="icons">
                    <van-icon name="chat-o" info="9" />
                    <van-icon name="thumb-circle-o" info="99+" />
                    <van-icon name="star-o"/>
                    <van-icon name="share"/>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            show:false,
            fontvalue:10,
            isshowadvertisement:true,
        }
    },
    methods:{
        // 返回上一页
        retur() {
            this.$router.go(-1)
        },
        // 跳转到贴吧详情
        jump() {
             this.$router.push({
                name:'bardetail'
             })
        },
        // 控制弹出框的显示隐藏
        showpopup() {
            this.show = true
        },
        // 弹出框隐藏
        cancel() {
            this.show = false
        },
        // 是否隐藏广告
        hiddenadvertisement() {
            this.isshowadvertisement = false
        }

    }
}
</script>

<style scoped>
    @import "@/assets/mobilecss/articledetail.css";
</style>