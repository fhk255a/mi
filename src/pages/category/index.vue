<template>
  <div class="page">
    <mi-header :title="title"></mi-header>
    <div class="body-main">
      <div class="main-wrap">
        <div class="category-list">
          <ul>
            <li v-for="(item,index) in categoryData" @click="selectNav(index)" :class="{'active':getNowIndex==index}">
              <a href="javascript:void(0)">
                <span>{{item.category_name}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="category-wrap" ref="category_item">
          <div  class="cateitem-list" v-for="(item , index) in categoryData" :class="'cate'+index">
            <div v-for="(list,index) in item.category_list">
              <div class="gory-banner" v-if="list.view_type=='cells_auto_fill'">
                <img v-lazy="list.body.items[0].img_url" alt="" class="img">
              </div>
              <div class="gory-title" v-else-if="list.view_type=='category_title'">
                <span class="title">{{list.body.category_name}}</span>
              </div>
              <div class="gory-goods" v-else>
                <ul class="gory-goods-list">
                  <li v-for="(goods,index) in list.body.items">
                    <a href="#/detail">
                      <div class="goods-img">
                        <img v-lazy="goods.img_url" class="img" alt="">
                      </div>
                      <span class="goods-name">{{goods.product_name}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mi-footer :pageIndex="1"></mi-footer>
  </div>
</template>

<script>
  import header from '../../components/header/backhead'
  import footer from '../../components/footer/index'
    export default {
      name: "index",
      data:function(){
        return{
          title:'分类',
          categoryData:[],
          nowNavIndex:0
        }
      },
      components:{
        'mi-header':header,
        'mi-footer':footer
      },
      created(){
        ajaxData('category.json',(data)=>{
          this.categoryData = data[0].data;
        });
      },
      methods:{
        selectNav(index){
          this.nowNavIndex = index;
          let goodsList = this.$refs.category_item.getElementsByClassName('cateitem-list');

          let el = goodsList[index];
          console.log($('html').css('font-size'));
          el.scrollIntoView()
          //让某个元素滚动到顶部 运动时间
        }
      },
      computed:{
        getNowIndex(){
          return this.nowNavIndex;
        }
      }
    }
</script>

<style scoped lang="stylus">
.page
  width: 100%;
.body-main
  position: relative
  margin: 0 auto
  width:100%
  .main-wrap
    padding: 1rem 0
    .category-list
      position: fixed;
      top: 1rem;
      bottom: 1rem;
      left: 0;
      width: 1.52rem;
      border-right: 1px solid #efefef;
      overflow: hidden;
      ul
        z-index: 90;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: -.3rem;
        padding: .2rem .3rem .2rem 0;
        background: #fefefe;
        overflow-y: auto;
        li
          font-size: .34rem;
          height: .9rem;
          line-height: .9rem;
          overflow: hidden;
          text-align: center;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          transition: -webkit-transform .1s linear;
          transition: transform .1s linear;
          transition: transform .1s linear,-webkit-transform .1s linear;
          transform-origin: center center;
          transform: scale(.76);
          -webkit-transition: -webkit-transform .1s linear;
          -webkit-transform-origin: center center;
          -webkit-transform: scale(.76);
          a
            color: #666;
        .active
          transform: scale(1);
          -webkit-transform: scale(1);
          span
            color: #fb7d34;
    .category-wrap
      padding-left: 1.84rem;
      padding-right: .32rem;
      font-size :.28rem
      .gory-banner
        width:100%
      .gory-title
        background: #fff;
        font-size: .28rem;
        text-align: center;
        font-weight: 400;
        margin-top: .2rem;
        height: 1.28rem;
        line-height: 1.28rem;
        position: relative;
        overflow: hidden;
        .title
          position: relative
          padding :0 0.2rem
          display: block
        .title:before,.title:after
          content: "";
          position: absolute;
          top: 50%;
          width: .4rem;
          border-top: 1px solid #000;
        .title:before
          left:10%
          transform: translate3d(150%,50%,0);
          -webkit-transform: translate3d(150%,50%,0);
        .title:after
          right:10%
          transform: translate3d(-150%,-50%,0);
          -webkit-transform: translate3d(-150%,-50%,0);
      .gory-goods
        .gory-goods-list
          overflow: hidden
          li
            float: left
            text-align: center
            width:33.3333%
            a
              display: block
              .goods-img
                width: 1rem;
                height: 1rem;
                margin: 0 auto;
                background: #fff;
                overflow: hidden;
              .goods-name
                margin-top: .28rem;
                white-space: nowrap;
                display: inline-block
                width: 90%
                font-size: .23rem;
                color: rgba(0,0,0,.54);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
/* .cateitem-list
    min-height: calc(100vh - .8rem);*/

</style>
