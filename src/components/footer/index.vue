<template>
    <footer>
      <div class="footer-nav">
        <a :href="item.href" @click="selectNowPage(index)" v-for="(item,index) in footerList" :class="{'active':pageIndex==index}">
          <i class="iconfont" :class="item.class"></i>
          <span>{{item.name}}</span>
        </a>
      </div>
    </footer>
</template>

<script>
    export default {
      name: "index",
      props:['pageIndex'],
      data:function(){
          return{
            footerList:[
              {
                href:'#/',
                name:'首页',
                class:'icon-shouye'
              },
              {
                href:'#/category',
                name:'分类',
                class:'icon-category'
              },
              {
                href:'#/cart',
                name:'购物车',
                class:'icon-calendar'
              },
              {
                href:'#/my',
                name:'我的',
                class:'icon-user'
              }
            ],
            nowPageIndex:0
          }
      },
      methods:{
          selectNowPage(index){
            this.nowPageIndex = index;
          }
      },
      computed:{
          getNowPage(){
            return this.nowPageIndex;
          }
      }
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
    .active
      color:#ff6700
</style>
