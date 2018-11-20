<template>
  <div>
    <header class="backhead">
      <div class="back-left">
        <a onclick="history.go(-1)">
          <div class="iconfont icon-back"></div>
        </a>
      </div>
      <div class="back-middle">
        {{title}}
      </div>
      <div class="back-right">
        <div class="iconfont icon-search"></div>
      </div>
    </header>
  </div>

</template>

<script>
    export default {
      name: "backhaed",
      props:['title'],
    }
</script>

<style scoped lang="stylus">
  .backhead
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 1rem;
    background: #f2f2f2;
    padding:.1rem
    color: #666;
    padding: 0;
    -webkit-transition: -webkit-transform .2s ease-out;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out,-webkit-transform .2s ease-out;
    >div
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center
      font-size :.3rem
      .iconfont
        width:100%
        font-size :.4rem
    .back-left,.back-right
      padding : 0 0.15rem
      text-align: center
      width:.6rem
    .back-right .iconfont
      font-size :.36rem
</style>
