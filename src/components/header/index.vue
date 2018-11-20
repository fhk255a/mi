<template>
  <div class="header">
    <header>
      <div class="header-wrap">
        <div class="header-left">
          <div class="header-logo">
            <a class="img" style="background-image: url(@/../static/img/logo.png)" alt=""></a>
          </div>
        </div>
        <div class="header-middle">
          <div class="header-search-t">
            <i class="iconfont icon-search"></i>
            仿小米商城官网
          </div>
        </div>
        <div class="header-right">
          <div class="header-user">
            <i style="background-image: url(@/../static/img/user.png)"></i>
          </div>
        </div>
      </div>
      <div class="nav-wrap">
        <div class="nav-toggle">
          <div class="iconfont icon-moreunfold"></div>
        </div>
        <div class="nav">
          <div class="nav-item" v-for="(item , index) in navList" @click="selectNavFun(index)" :class="{'active':nowIndex==index}">
            <span>{{item}}</span>
          </div>
          <div class="nav-item-last"></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "header",
    data:()=>{
      return {
        navList:['双十一','手机','智能','电视','笔记本','生活周边','家电','影音娱乐'],
        nIndex:0
      }
    },
    methods:{
      selectNavFun:function(index,event){
        this.nIndex = index;
        this.$emit('now',this.nowIndex);
      }
    },
    computed:{
      nowIndex:function(){
        return this.nIndex;
      }
    },
  }
</script>

<style scoped lang="stylus">
  .header
    position: fixed
    left: 0
    top: 0
    right: 0
    z-index: 999
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2)
    background: #f2f2f2
    .header-wrap, .nav-wrap
      height: .84rem
    .header-wrap
      display: flex
      align-items: flex-end;
      overflow: hidden
      justify-content: space-between;
      & > div
        display: flex
        align-items: flex-end;
        text-align: center
        padding: 0 0.15rem
        margin: .075rem 0;
        height: .7rem
      .header-middle
        flex: 1
        height: .6rem
        padding: 0
        margin: .1rem 0
        line-height: .6rem
        border: 1px solid #e5e5e5;
        text-align: left;
        width: 100%;
        color: rgba(0, 0, 0, .3);
        border-radius: .04rem;
        background: #fff
        font-size: .3rem
        .header-search-t
          padding: 0 0.15rem
      .header-logo, .header-user
        width: .6rem
        height: 100%
        .img
          display: block;
          background-repeat: no-repeat;
          background-size: .5rem;
          background-position: 50%;
        i
          display: block
          text-align: center
          background-position: 50%;
          background-size: .4rem .4rem;
          height: 100%
          background-repeat: no-repeat
    .nav-wrap
      height: .6rem
      position: relative
      overflow: hidden
      font-size :.26rem
      .nav-toggle
        position: absolute;
        right: 0;
        top: 0;
        width: .68rem;
        height: .6rem;
        text-align: center
        line-height: .6rem;
        background-color: #f2f2f2;
        box-shadow: -15px 0 15px 0 #f2f2f2;
        z-index: 99;
      .nav
        height: .8rem
        white-space: nowrap;
        overflow-x: auto
      .nav-item
        display: inline-block
        line-height: .6rem
        padding: 0 .2rem
        color: rgb(116, 116, 116);
        border-color: rgb(242, 242, 242);
        span
          display: inline-block;
          line-height: .5rem;
          border-bottom: 2px solid rgba(237,91,0,0);
      .active span
        color: rgb(237, 91, 0);
        border-bottom:2px solid rgb(237, 91, 0);
      .nav-item-last
        padding-right: .76rem;
        display: inline-block;

</style>
