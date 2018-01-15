<template>
  <cms-frame  v-if="path!='login'" :menu="menu" :login-out="loginOut" >
    <lqb-frame-warp :title="title">
      <slot></slot>
    </lqb-frame-warp> 
  </cms-frame>
  <div v-else>
    <slot></slot>
  </div>
</template>
<script>
import { Menu } from "@/store/contain";
import { loginOut } from "@/utils/";
import { mapState } from "vuex";
import cmsFrame from "./cmsFrame";
export default {
  data() {
    return {
      menu: []
    };
  },
  computed: {
    ...mapState(["title","path"]),
  },
  components: {
    cmsFrame
  },
  mounted() {
    this.menu = Menu;
    console.log(this.path)
  },
  methods: {
    loginOut() {
      loginOut();
    }
  }
};
</script>

<style>
a {
  color: #0006ce;
  text-decoration: none;
  font-size: 14px;
}
</style>
