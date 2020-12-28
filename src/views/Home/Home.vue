<template>
  <!--首页外卖-->
  <div class="on">
    <section class="home">
      <!--首页头部-->
      <header-top :title="address.name">
        
        <router-link class="header_search" slot="left" to="/search">
          <i class="iconfont icon-icon-search"></i>
        </router-link>
        <router-link class="header_login" slot="right" :to="userInfo._id?'/userinfo':'/login'">
          <span class="header_login_text" v-if="!userInfo._id">登录/注册</span>
          <span class="header_login_text" v-else>
            <i class="iconfont icon-gerenzhongxin"></i>
          </span>
        </router-link>
      </header-top>
      <!--首页导航-->
      <nav class="home_nav" >
        <div class="swiper-container" v-if="categorys.length">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(categorys, index) in categorysArr"
              :key="index"
            >
              <a
                href="javascript:"
                class="link_to_food"
                v-for="(category, index) in categorys"
                :key="index"
              >
                <div class="food_container">
                  <img :src="baseImageUrl + category.image_url" />
                </div>
                <span>{{ category.title }}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="./imgs/msite_back.svg" v-else>
      </nav>
      <!--首页附近商家-->
      <div class="home_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <shop-list></shop-list>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import ShopList from "../../components/ShopList/ShopList.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com",
    };
  },

  computed: {
    ...mapState(["address", "categorys","userInfo"]),
    /**
     * 根据categorys一维数组生成一个二维数组
     * 小数组中的元素个数最大是8
     */
    categorysArr() {
      const { categorys } = this;
      //准备空的二维数组
      const arr = [];
      //准备小数组（最大长度为8）
      let minArr = [];
      //遍历categorys
      categorys.forEach((c) => {
        //如果当前小数组已经满了，创建一个新的
        if (minArr.length === 8) {
          minArr = [];
        }
        //如果minArr是空的，将小数组保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        //将当前分类保存到小数组中，第一：保证小数组关联到大数组当中去了。第二：保证小数组不是满的
        minArr.push(c);
      });

      return arr;
    },
  },
  watch: {
    categorys(value) {
      //categorys数组中有数据了，在异步更新界面之间就执行了
      //使用setTimeout可以实现效果，但效果不好
      // setTimeout(() => {}, 100);

      //界面更新就立即创建Swiper对象
      this.$nextTick(() => { //一但完成界面更新，立即调用（语句要写在数据更新之后）
        //创建一个swiper实例对象，来实现轮播,创建时机在列表显示之后
        new Swiper(".swiper-container", {
          loop: true, //可以循环轮播
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },

  methods: {},
  created() {},
  mounted() {
    this.$store.dispatch("getCategorys");//发送请求获取食物分类列表
    this.$store.dispatch("getShops");//发送请求获取商家列表
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {
    HeaderTop,
    ShopList,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins';

.home { // 首页
  width: 100%;

  .home_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .home_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
