<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Location } from '@element-plus/icons-vue'
import { platformStyle } from '../../assets/js/styles';
import AdminHeader from './views/AdminHeader.vue';
import AdminMain from './views/AdminMain.vue';
import { useDark } from '@vueuse/core';
const { innerAsideStyle, mainStyle, headerStyle, asideStyle, toggleAside, asideSwitchStyle } = platformStyle()!;
useDark()
</script>

<template>
    <el-container>
        <el-header>
          <AdminHeader/>
        </el-header>
        <el-main>
          <el-container>
            <el-aside :style="asideStyle">
                <el-menu
        default-active="1"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>权限管理</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
            </el-aside>
            <el-main :style="mainStyle">
                <AdminMain/>
            </el-main>
          </el-container>
        </el-main>
        <el-footer>

        </el-footer>
    </el-container>
    <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style scoped>

.el-header {
    border: none;
    border-bottom: 1px solid var(--el-border-color-light);
    background-color: var(--el-fill-color-light);

}


.el-main {
    padding: 0px;
}

.el-menu {
    padding: 8px;
    background-color: var(--transparent-bg);
    height: 100%;
}


.el-sub-menu .el-menu-item {
    height: 30px;
    margin-bottom: 4px;
}

.el-menu-item.is-active {
    background-color: var(--focus-background-color);
    color: #E5EAF3;
    font-weight: bold;
    border-radius: 5px;
}

.el-menu-item:hover {
    border-radius: 5px;
}
</style>
