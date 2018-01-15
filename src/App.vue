<template>
  <div id="app">
    <frames>
      <router-view v-loading="loading"></router-view>
    </frames>
  </div>
</template>

<script>
import frames from "@/components/Frame.vue";
import { mapState } from "vuex";

export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    ...mapState(["title", "loading","path"]),
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    changecompont: function(i) {
      // console.log(i);
    }
  },
  components: {
    frames
  }
};
</script>

<style lang="less">
  .el-table thead th {
      background: #f5f5f5;
  }
</style>
