<template>
    <footer>
      <div class="footer-nav">
        <a href="#">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
        </a>
        <a href="#">
          <i class="iconfont icon-more1"></i>
          <span>分类</span>
        </a>
        <a href="#">
          <i class="iconfont icon-calendar"></i>
          <span>购物车</span>
        </a>
        <a href="#">
          <i class="iconfont icon-user"></i>
          <span>我的</span>
        </a>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="stylus">
footer
  position: fixed
  background: #fff;
  -webkit-transition: -webkit-transform .2s ease-out;
  transition: -webkit-transform .2s ease-out;
  transition: transform .2s ease-out;
  transition: transform .2s ease-out,-webkit-transform .2s ease-out;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  bottom:0
  left:0
  right :0
  z-index:9999
  div
    width: 100%
    height:1rem
    display: flex
    align-content :center
    align-items :center
    a
      display: block
      font-size :.26rem
      flex:1
      color:#666
      text-align: center
      i
        display: block
        width:100%
</style>
