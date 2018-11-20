<template>
  <div class="product-page" ref="detailInfo">
    <div class="header">
      <a onclick="history.go(-1)" class="iconfont back icon-back"></a>
      <a class="iconfont more icon-category"></a>
    </div>
    <div class="goods-banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide img" v-for="(ban) in banner">
          <a href="#">
            <img v-lazy="ban" alt="">
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="goods-name">
      <span>{{info.name}}</span>
    </div>
    <div class="goods-tag">
      <div class="tag"></div>
    </div>
    <div class="goods-prices">
      <div class="">
        <!--<span class="price cur-price">{{goodsList[0].price}}</span>-->
        <!--<span class="price old-price">{{goodsList[0].market_price}}</span>-->
      </div>
    </div>
    <div class="goods-params">
      <ul>
        <li class="params-item" v-for="(item) in params.class_parameters.list" v-if="item.is_page_show">
          <img :src="item.icon" alt="">
          <div class="title">{{item.top_title}}</div>
          <div class="title">{{item.bottom_title}}</div>
        </li>
      </ul>
    </div>
    <div class="goods-cur-active">
      <div class="">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="goods-comments swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide comment-item" v-for="(comment) in comments">
          <div class="">
            <div class="comment-user">
              <div class="user-img">
                <img :src="comment.user_avatar" alt="">
              </div>
              <div class="user-name">
                <p class="name">{{comment.user_name}}</p>
                <p class="time">{{comment.add_time}}</p>
              </div>
              <div class="user-like">
                <i class="iconfont icon-like"></i>{{comment.up_num}}
              </div>
            </div>
            <div class="comment-text">
              <p>{{comment.comment_content}}</p>
            </div>
            <div class="comment-imgs">
              <div v-for="(img, index ) in comment.comment_images" v-if="index<3">
                <img class="img" v-lazy="img" alt="">
              </div>
            </div>
            <div class="comment-reply">
              <span>官方回复:</span>
              <span>{{comment.reply_content}}</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="more-comments">
        <p>更多评论</p>
      </div>
    </div>
    <div class="goods-detail-info">
      <ul>
        <li class="goods-info-img" v-for="(img) in info_imgs">
          <img v-lazy="img" alt="">
        </li>
      </ul>
    </div>
    <footer>
      <div class="footer-container">
        <div class="footer-icon">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
        </div>
        <div class="footer-icon">
          <i class="iconfont icon-zip"></i>
          <span>购物车</span>
        </div>
        <div class="footer-cart">
          <div class="cart-btn">
            加入购物车
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: "index",
    data:function(){
      return{
        goodsInfo:{},
        info:{},
        goodsList:[],
        params:[],
        comments:[],
        info_imgs:[],
        banner:[]
      }
    },
    created(){
      ajaxData('phone.json',(data)=>{
        let result = data[0].data;
        this.goodsInfo = result;
        this.info = result.product_info;
        this.goodsList = result.goods_info;
        this.comments = result.goods_share_datas.comments.list;
        this.info_imgs = result.info_imgs;
        this.params = result.goods_info[0];
        this.banner = result.banner;
        this.$nextTick(()=>{
          let el = this.$refs.detailInfo;
          el.children[3].getElementsByClassName('tag')[0].innerHTML=this.info.product_desc;
          let bannerLoop = new Swiper('.goods-banner' ,{
            watchOverflow: true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: {
              disableOnInteraction: false
            }
          });
        })
      })
    },
    mounted(){
      // console.log(Swiper);
      // let commentLoop = new Swiper('.product-page .goods-comments',{
      //
      // });
      // let bannerLoop = new Swiper('.goods-banner' ,{
      //   loop:true
      // });
    }
  }
</script>

<style scoped lang="stylus">
@import "../../assets/stylus/main.styl"
.product-page
  font-size :.28rem
  overflow: hidden;
  padding-bottom: 1rem
  line-height:1.5em
  .header
    position: absolute
    top:0
    height:1rem
    z-index: 999
    right:0
    color: #fff
    line-height: .6rem
    left:0
    display: flex
    a
      margin :.2rem 0
      position: absolute
      -webkit-border-radius: 50%
      -moz-border-radius: 50%
      border-radius: 50%
      height: .6rem
      background: #666
      width: .6rem
      text-align: center
      color :#fff
      top: 0
      font-size :.36rem
      display: block
    .back
      left:0.32rem
    .more
      right:0.32rem
  .goods-banner
    background: #ccc;
    position: relative
    width: 100%;
    height: 7.92rem;
    img
      width: 100%
      height:100%
  .goods-name
    font-size :.4rem
    padding:.32rem .32rem 0
    background: #fff;
    text-align: left;
  .goods-tag .tag
    font-size :.24rem
    padding:0 .32rem
    word-break: break-all;
    color: rgba(0,0,0,.54);
  .goods-prices
    position: relative;
    padding:0 .32rem
    .price
      position: relative
      padding-left: .5em;
    .price:before
      content: "\A5";
      position: absolute;
      left: 0;
      top: 0;
      line-height:.4rem
      font-size: .76em;
      text-decoration: none;
    .cur-price
      color: #ff6700;
      font-size: .48rem;
    .cur-price:before
      line-height:.65rem
    .old-price
      color:#747474
      margin-left :.75em
      text-decoration: line-through

  .goods-params
    padding-top:.2rem
  .goods-params ul
    overflow-x: auto
    padding: 0 0 .16rem;
    display: flex;
    align-items: center;
    text-align: center;
    .params-item
      min-width: 1.68rem;
      display: inline-block
      padding: 0 .08rem;
      text-align: center
      border-before-1px(#d9d9d9)
      .title
        white-space: nowrap;
        overflow: hidden;
        font-size :.24rem
        text-overflow: ellipsis;
      img
        width:.4rem
        height:.4rem
        display: block
        margin: 0 auto
    .params-item:before
      height:300%
      transform: scaleX(.3333) translateZ(0);
  .goods-cur-active
    >div
      background-color: #fafafa;
      border-radius: .16rem;
      overflow: hidden;
      margin: .16rem .32rem 0;
  .goods-comments
    margin: 0
    .swiper-wrapper
      overflow-x: auto
      .comment-item
        width: 5.9rem;
        margin-left: .32rem;
        height: 4.7rem;
        box-sizing: border-box;
        padding: .32rem;
        background-color: #fafafa;
        border-radius: .16rem;
        font-size :.24rem
        overflow: hidden;
        .comment-user
          display: flex
          align-items: center;
          .user-img
            margin-right: .24rem;
            width: .64rem;
            height: .64rem;
            overflow: hidden;
            border-radius: 100%;
          .user-name
            flex:1
            .name
              margin: 0
              line-height:1
            .time
              color: rgba(0,0,0,.54);
          .user-like
            background-size: auto 80%;
            height: .36rem;
            line-height: .36rem;
            color: rgba(0,0,0,.54);
        .comment-text
          margin: .12rem 0;
          line-height: 1.5em;
          height: 3em;
          overflow: hidden;
          position: relative;
          color: rgba(0,0,0,.87);
        .comment-imgs
          >div
            display: inline-block;
            width: 1.646rem;
            height: 1.26rem;
            margin: 0 .16rem 0 0;
            border-radius: .16rem;
            overflow: hidden;
            position: relative;
            .img
              width: 100%;
              height: auto;
              position: absolute;
              top: 50%;
              left: 50%;
              -webkit-transform: translate(-50%,-50%);
              transform: translate(-50%,-50%);
        .comment-imgs>div:last-child
          margin-right: 0
        .comment-reply
          overflow: hidden
          line-height: 1.3em
          height:.6rem
      .comment-item:last-child
        margin-right:.32rem
    .more-comments
      margin:.32rem auto .5rem;
      color: #4e72a5;
      text-align: center
      display: block;
  .goods-detail-info
    width:100%
    .goods-info-img
      line-height:0
      img
        width: 100%
        height:auto
  footer
    padding: 0 .16rem .16rem;
    background: transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    .footer-container
      background-color: hsla(0,0%,100%,.96)!important;
      width: 100%;
      height: 1rem;
      border: 1px solid #e5e5e5;
      border-radius: .16rem;
      overflow: hidden;
      box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)
      display: flex
      align-items :right
      .footer-icon
        padding-left :.45rem
        text-align: center
        color :rgba(0,0,0,.54)
        padding-top :.1rem
        .iconfont
          font-size :.4rem
          display: block
      .footer-cart
        flex:1
        justify-items :right
        position: relative
        .cart-btn
          outline: 0;
          background: #ff6700;
          color: #fff;
          text-align: center;
          height: 1rem;
          position: absolute;
          right: 0.32rem;
          top:.18rem;
          line-height: 1rem;
          font-size: .28rem;
          display: inline-block;
          width: auto;
          max-width: 4rem;
          overflow: hidden;
          padding: 0 .48rem;
          height: .64rem;
          line-height: .64rem;
          border-radius: .32rem;
</style>
