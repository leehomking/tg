<script setup lang="ts">
import { ref } from 'vue';

let logSrc = ref("../../../assets/logo.svg")
</script>

<template>    
    <el-row  justify="space-between">
        <el-col class="header" style="justify-content:start;" :span =8>
            <el-image
          :size="32"
          src="https://element-plus.gitee.io/images/element-plus-logo.svg"
        />
        </el-col>
        
        <el-col class="header" style="justify-content:end;" :span="10">
            <el-avatar
            class="mr-3"
            :size="32"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </el-col>
    </el-row>
</template>
<style scoped>
.el-col, .el-row {
    height: 60px;

}

.header {
    display: inline-flex;
    align-items: center;
    border-bottom: 1px solid var(--el-border-color-light);
}
</style>