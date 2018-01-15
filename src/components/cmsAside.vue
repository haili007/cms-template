<style scoped>
.ys-side {
  position: fixed;
  top: 50px;
  bottom: 0;
  z-index: 99;
  width: 160px;
  overflow-x: hidden;
}
.ys-bg-black {
  background-color: #636161 !important;
}
.ys-side-scroll {
  width: 180px;
  height: 100%;
  overflow-x: hidden;
}
.ys-nav-tree {
  position: relative;
  background-color: #636161;
  color: #fff;
  border-radius: 2px;
  font-size: 0;
  box-sizing: border-box;
  width: 160px;
  padding: 0;
}
.ys-nav-tree * {
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s;
  -moz-transition: all 0.3s; /* Firefox 4 */
  -webkit-transition: all 0.3s; /* Safari 和 Chrome */
  -o-transition: all 0.3s; /* Opera */
}

.ys-nav-item {
  line-height: 40px;
  display: block;
  width: 100%;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 1px;
}

.ys-nav-tree .ys-nav-item a {
  height: 45px;
  line-height: 45px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 20px;
  color: #fff;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
}
.ys-nav-child {
  left: 0;
  top: 65px;
  min-width: 100%;
  line-height: 36px;
  padding: 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  border: 1px solid #d2d2d2;
  z-index: 100;
  border-radius: 2px;
  white-space: nowrap;
  position: relative;
  z-index: 0;
  top: 0;
  border: none;
  box-shadow: none;
}
.ys-nav-title {
  display: block;
  background: rgba(177, 178, 179, 0.3);
  cursor: pointer;
  box-shadow: 12px 3px 5px rgba(1, 1, 1, 0.2);
}
.ys-nav-title:hover {
  background: rgba(177, 178, 179, 0.1);
}
.ys-nav-tree .ys-nav-child {
  margin: 0;
  overflow: hidden;
}
.ys-nav-tree .ys-nav-child a {
  height: 40px;
  line-height: 40px;
  color: #fff;
  color: rgba(255, 255, 255, 0.7);
}
.ys-nav-tree .ys-nav-child a:hover {
  color: #ffffff;
}
.ys-nav-icon {
  position: absolute;
  right: 10px;
  top: 0px;
}
</style>
<template>
  <div class="ys-side ys-bg-black"> 
   <div class="ys-side-scroll"> 
    <ul class="ys-nav-tree"> 
     <li :key="index" v-for="(item,index) in menu" class="ys-nav-item"> 
            <span @click='toggleFold(index)' class="ys-nav-title">
            <a :style="(locPath==item.path.replace(' ',''))?'color: #72feff':''" >{{item.name}}</a><span v-if="item.child.length"  :style="item.fold?'':'transform: rotate(-180deg);'" class="ys-nav-icon icon iconfont icon-shangjiantou"></span>
            </span> 
            <dl v-show="item.fold" v-if="item.child.length" :class="'ys-nav-child showAnimation'+item.child.length"> 
            <dd :key="index1" v-for="(item1,index1) in item.child" > 
               <router-link :style="(locPath==item1.path.replace(' ',''))?((item.fold=true)&&'color: #72feff'):''" :to="item1.path">{{item1.name}}</router-link>
            </dd>  
            </dl> 
      </li> 
    </ul> 
   </div> 
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: ["data", "fold"],
  data() {
    return {
      loader: true,
      defalut: false,
     
    };
  },
  mounted() {
    // let _this = this;
    // window.addEventListener("popstate", function() {
    //   _this.loader = false;
    //   _this.locPath =
    //     location.pathname + location.hash == "/"
    //       ? "/#/"
    //       : location.pathname + location.hash;
    // });
  },
  updated() {},
  computed: {
    locPath(){
      return this.$route.path;
    },
    menu() {
      if (this.setMenuData && this.data) return this.setMenuData(this.data);
      return [];
    }
  },
  methods: {
    setMenuData(data) {
      data = data || [];
      let menu = [],
        temp = {};
      for (let k = 0; k < data.length; k++) {
        Vue.set(data[k], "fold", this.fold ? this.fold : this.defalut);
        // data[k].fold=this.fold?this.fold:this.defalut;
        if (data[k].parentId == 0 || !temp[data[k].parentId]) {
          menu.push(data[k]);
          temp[data[k].id] = data[k];
          temp[data[k].id].child = [];
        } else {
          temp[data[k].parentId].child.push(data[k]);
        }
      }
      return menu;
    },
    toggleFold(i) {
      this.loader = false;
      //Vue.set(this.menu[i],"fold",!this.menu[i].fold);
      this.menu[i].fold = !this.menu[i].fold;
    }
  }
};
</script>


