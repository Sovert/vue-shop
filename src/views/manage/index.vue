<template>
  <div class="manage-container">
    <el-container>
      <el-header>header</el-header>
      <el-container>
        <el-aside>
          <el-row>
            <el-col>
              <el-menu>
                <el-menu-item index="1">
                  <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>main111</el-main>
          <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Message } from "element-ui";

export default {
  name: "manage",
  data() {
    return {};
  }
};
</script>

<style>
.manage-container {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
}
.el-container{
  padding: 0px;
  margin: 0px;
  height: 100%;
}

</style>
