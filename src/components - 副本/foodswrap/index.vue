<template>
  <div >
    <div class="foods-wrap-item" >
      <div class="foods-loop">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(img , index) in itemdata.banner">
            <a href="#">
              <img class="img" alt="" :src="img">
            </a>
          </div>
        </div>
      </div>
      <div class="foods-body">
        <img />
        <div class="foods-box clear">
          <div class="foods-box-item" v-for="(good,index) in itemdata.data">
            <div class="img">
              <img class="img" :src="good.img" alt="">
            </div>
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
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
      name: "index",
      props:[
        'itemdata','databu'
      ],
      data:()=>{
        return{
          goodsDataList:[],
        }
      },
      created(){
        $(function(){
          $.ajax({
            url:"../../../static/data.json",
            success:(data)=>{
              this.goodsDataList = data;
            }
          })
        })
      },
      mounted(  ){
        console.log(this.databu);
        /* eslint-disable no-new */
        let swiper = new Swiper('.foods-wrap-item .foods-loop', {})
      }

    }
</script>

<style scoped lang='stylus'>
.foods-loop
  a
    display: block
    height:3.6rem
    background: sandybrown
.foods-body
  margin-top :.15rem
  .foods-box-item
    width: 50%
    float: left
    margin-bottom:.24rem
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    .img
      height:3.6rem
      background: silver
      width: 3.6rem
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
  .foods-box-item:nth-child(2n)
    padding-left :.03rem
  .foods-box-item:nth-child(odd)
    padding-right :.03rem
</style>
