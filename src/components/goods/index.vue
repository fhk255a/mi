<template>
  <div class="goods-more">
    <div class="goods-item" v-for="(item , index) in goods.data">
      <a href="#/detail">
        <div class="goods-img">
          <img v-lazy="item.img" class='img' alt="">
        </div>
        <div class="goods-info">
          <p class="goods-name">
            {{item.name}}
          </p>
          <p class="goods-price">
            <span class="" v-for="(price,i) in item.price" :class="i==0?'cur-price':'old-price'">{{price}}</span>
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    props:['goods']
  }
</script>

<style scoped lang="stylus">
  .goods-more
    display: flex
    justify-content: start
    flex-wrap: wrap;
    font-size :.28rem
    .goods-item
      -webkit-box-flex: 0;
      /* -webkit-flex: 0 1 49.5%; */
      flex: 0 49.5%;
      overflow: hidden;
      .goods-img
        width: 100%
        background: #ededed
        height: 3.56rem
        position: relative
        .img
          position: absolute
          left:0
          top: 0
          width: 100%
          height:100%
      .goods-info
        padding: .18rem .26rem .22rem;
        .goods-name
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        .goods-price
          margin-top: .1rem;
          .cur-price
            font-size: .32rem;
            display: inline-block;
            position: relative
            color: #ff6700;
            padding-left:.15rem
          .old-price
            text-decoration :line-through
            font-size: .22rem;
            padding-left:.15rem
            position: relative
            margin-left: .1rem;
            color: rgba(0,0,0,.54);
          .cur-price:before
            content: "\A5";
            position: absolute;
            left: 0;
            top: 0;
            line-height: .4rem
            font-size: .76em;
            text-decoration: none;
          .old-price:before
             content: "\A5";
             position: absolute;
             left: 0;
             top: 0;
             line-height: .3.4rem
             font-size: .76em;
             text-decoration: none;
    .goods-item:nth-child(2n)
      margin-left :1%
</style>
