<template>
  <div class="cart-page">
    <mi-header :title="headerTitle"></mi-header>
    <div class="page-wrap">
      <div class="login-status">
        <div class="status-text">登录也不给你优惠</div>
        <div class="login-btn">
          <a>去登录 <i class="iconfont icon-more1"></i></a>
        </div>
      </div>
      <div class="cart-status">
        <ul>
          <li>
            <i class="iconfont icon-gifts"></i>
            <span>购物车还是空的</span>
            <a href="#/category" class="go-sui">去逛逛</a></p>
          </li>
        </ul>
      </div>
      <div class="cart-more">
        <img class="img" src="../../../static/img/cart.jpg" alt="">
      </div>
      <mi-goods :goods="goods"></mi-goods>
    </div>
    <mi-footer :pageIndex="2"></mi-footer>
  </div>
</template>

<script>
  import header from '../../components/header/backhead'
  import footer from '../../components/footer/index'
  import goodsItem from '../../components/goods/index'
  export default {
    name: "cart",
    data:function(){
      return{
        headerTitle:'购物车',
        goods:[],
      }
    },
    components:{
      'mi-header':header,
      'mi-footer':footer,
      'mi-goods':goodsItem
    },
    created(){
      ajaxData('data.json',(data)=>{
        this.goods = data[0];
      })
    }
  }
</script>

<style scoped lang="stylus">
  .page-wrap
    padding:1rem 0
    .login-status
      height:1rem
      line-height: 1rem
      display: flex
      width: 100%
      justify-content :space-between
      font-size:.28rem
      .status-text
        padding-left:.32rem
      .login-btn
        padding-right:.32rem
        color:rgba(0,0,0,.54)
        font-size :.24rem
    .cart-status
      background: #ebebeb
      height: 1rem
      font-size: .28rem
      line-height: 1rem
      text-align: center
      padding: .1rem 0
      li
        color:rgba(0,0,0,.27)
        font-size :.22rem
      .go-sui
        display: inline-block;
        border: 1px solid rgba(0,0,0,.15);
        box-sizing: border-box;
        height: .5rem;
        line-height: .48rem;
        padding: 0 .24rem;
        color: rgba(0,0,0,.87);
        font-style: normal;
      .icon-gifts
        font-size :.4rem
        padding-right :.2rem
        line-height:1rem
      span
        line-height:.88rem
    .cart-more
      height:1.2rem
      .img
        width: 100%
        height:auto
</style>
