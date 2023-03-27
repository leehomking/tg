<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Location } from '@element-plus/icons-vue'
import { platformStyle } from '../../assets/js/styles';
import AdminHeader from './views/AdminHeader.vue';
import AdminMain from './views/AdminMain.vue';
import { useDark } from '@vueuse/core';
import menuTree from '../../assets/js/menu';
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
                <el-menu default-active="1" >
                  <el-sub-menu :index="menu.id" v-for="menu in menuTree">
                    <template #title>
                      <el-icon><location /></el-icon>
                      <span>{{ menu.desc }}</span>
                    </template>
                    <el-menu-item-group title="" v-for="submenu in menu.subMenus">
                      <el-menu-item :index="submenu.id">{{ submenu.desc }}</el-menu-item>
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
    /* background-color: var(--el-fill-color-light); */
    background-color: var(--el-bg-color);
}


.el-main {
    padding: 0px;
    background-color: var(--el-fill-color-light);
}

:deep() .el-menu {
    padding: 8px;
    background-color: var(--transparent-bg);
    height: 100%;
    border-right: none;
}


.el-sub-menu .el-menu-item {
    height: 30px;
    margin-bottom: 4px;
    background-color: var(--transparent-bg)
}

.el-sub-menu {
    background-color: var(--transparent-bg)
}

.el-menu-item.is-active {
    /* background-color: var(--focus-background-color);
    color: #E5EAF3; */
    font-weight: bold;
    /* border-radius: 5px; */
}

.el-menu-item:hover {
    border-radius: 5px;
}
</style>
