<template>
  <a-layout>
    <a-layout-header>
      <Header></Header>
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <LeftController></LeftController>
      </a-layout-sider>
      <a-layout-content>
        <ViewEditor></ViewEditor>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import ComponentDetail from "./ComponentDetail/index.vue";
import Header from "./Header/index.vue";
import LeftController from "./LeftController/index.vue";
import ViewEditor from "./ViewEditor/ViewEditor";
defineOptions({
  name: "Base",
});
</script>

<style lang="scss" scoped>
.ant-layout-header {
  color: $blue !important;
}
</style>