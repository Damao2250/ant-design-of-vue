<template>
  <div class="layout">
    <a-layout id="components-layout-demo-custom-trigger">
      <x-sider></x-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="onToggel"
          />
        </a-layout-header>
        <a-layout-content
          class="layout-content"
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px'
          }"
        >
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import XSider from "./sider";
export default {
  name: "layout",
  components: {
    XSider
  },
  data() {
    return {
      // collapsed: false
    };
  },
  computed:{
    ...mapGetters("app/",["collapsed"])
  },
  methods: {
    ...mapActions("app/",['setCollapse']),
    onToggel(){
      this.setCollapse({type:"TOGGLE_COLLAPSE"})
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
}
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.layout-content{
  overflow-y: scroll;
}
</style>