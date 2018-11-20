<template>
  <div id="index-page">
    <mi-header @now="showIndexPage"></mi-header>
    <div class="body-main">
      <div class="foods-wrap-item " v-for="( item , index ) in goodsDataList" :class="{'loop':showIndex==index}" :style="'background:'+background[index]" :key="index" :databu="index"  v-show="showIndex==index" >
        <div class="foods-loop" v-if="showIndex==index">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img , index) in item.banner">
              <a href="#">
                <img class="img" alt="" v-lazy="img">
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" v-if="item.banner.length>1"></div>
        </div>
        <div class="foods-body">
          <img :src="item.title" style="width: 100%;height:auto"/>
          <div class="foods-box clear">
            <div class="foods-box-item" v-for="(good,index) in item.data">
              <a href="#/detail">
                <div class="img">
                  <img class="img" v-lazy="good.img" alt="">
                </div>
              </a>
              <div class="info">
                <p class="name">{{good.name}}</p>
                <p class="tag">{{good.tag}}</p>
                <p class="price">
                  <span>{{good.price[0]}}</span>
                  <span class="old-price" v-if="good.price[1]">{{good.price[1]}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mi-footer :pageIndex="0"></mi-footer>
  </div>
</template>

<script>

  import header from '../../components/header/index'
 // import foodswrap from '../../components/foodswrap/index'
  import footer from '../../components/footer/index'
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
      name: "index",
      components:{
        'mi-header':header,
        //'mi-wrap':foodswrap,
        'mi-footer':footer,
      },
      data:function(){
        return {
          goodsDataList:[],
          showNowIndex:0,
          background:['#ee5318','#3f5fec','#9920f3','#faab00','#ea361c','#fff','#fff','#fff'],
          isLoop:false
        }
      },
      created(){
        ajaxData('data.json',(data)=>{
          this.goodsDataList = data;
        });
        //获取子级的index
        this.$on("now",function(index){
        })
      },
      updated(){
        console.log(1)
          let str = new Swiper('.loop .foods-loop', {
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
            },
            disableOnInteraction: false,
            autoplay: {
              disableOnInteraction: false
            }
          })

      },
      methods:{
        showIndexPage(index){
          this.showNowIndex = index;
        }
      },
      computed:{
        showIndex(){
          return this.showNowIndex;
        }
      }

    }
</script>

<style scoped lang="stylus">
  .body-main
    padding-bottom: 1rem;
    position: absolute;
    top: 1.45rem;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #fff;
  .foods-loop
    position: relative;
  a
    display: block
    height:3.6rem
  .foods-body
    margin-top :.15rem
    .foods-box
      padding: 0 .13rem;
    .foods-box-item
      width: 3.4rem
      float: left
      margin-bottom:.24rem
      -webkit-box-sizing: border-box
      -moz-box-sizing: border-box
      overflow: hidden
      background: #fff
      box-sizing: border-box
      .img
        height:3.4rem
        width: 100%
        transition: opacity .5s ease;
        opacity: 1;
      .info
        padding: .2rem .27rem;
        font-size :.26rem
        text-align: left;
        p
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        .tag
          line-height: .3rem;
          margin-top: .06rem
          height: .35rem
          color: rgba(0,0,0,.54);
        .price span:before
          content: "\A5";
          position: absolute;
          left: 0;
          top: 0;
          font-size: .22rem;
          text-decoration: none;
        .price
          color:orangered
          position: relative
          font-size:.28rem
        .price span
          position: relative
          display: inline-block;
          padding-left :.15rem
        .old-price
          color: #ccc
          text-decoration: line-through
          font-size :.2rem
        .old-price:after
          content: "\A5";
          position: absolute;
          left: 0;
          top: 0;
          font-size: .22rem;
          text-decoration: none;
    .foods-box-item:nth-child(odd)
      margin-right :.12rem
</style>
