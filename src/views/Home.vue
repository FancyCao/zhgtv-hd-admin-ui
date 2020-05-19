<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo logo-width">
        <router-link to="/home">
          <img src="../assets/imgs/logo.png" />
        </router-link>
        <span class="txt">活动后台管理系统</span>
      </el-col>
      <el-col :span="10"></el-col>
      <el-col :span="4" class="userInfo">
        <el-dropdown>
          <span class="el-dropdown-link userinfo-inner">
            <img src="../assets/imgs/default_icon.jpeg" alt />曹毅
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>设置</el-dropdown-item>
            <el-dropdown-item disabled>修改密码</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <div class="menu-expanded">
        <el-scrollbar style="height: 100%">
          <el-menu
            unique-opened
            :default-active="$route.path"
            background-color="#ffffff"
            text-color="#303133"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-zhgtv-templates"></i>
                <span>模板管理</span>
              </template>
              <el-menu-item index="/home/index">首页</el-menu-item>
              <el-menu-item index="/home/sign">签到模板</el-menu-item>
              <el-menu-item index="/home/lottery">抽奖模板</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-zhgtv-activities"></i>
                <span>活动管理</span>
              </template>
              <el-menu-item index="2-1">签到活动</el-menu-item>
              <el-menu-item index="2-2">抽奖活动</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-zhgtv-records"></i>
                <span>记录管理</span>
              </template>
              <el-menu-item index="3-1">签到记录</el-menu-item>
              <el-menu-item index="3-2">抽奖记录</el-menu-item>
              <el-menu-item index="3-3">中奖记录</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </div>
      <div class="content-container">
        <el-scrollbar style="height:100%">
          <el-row>
            <el-col :span="24" style="margin: 10px 0px;">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="item.path">
                  <strong class="title">{{ item.name }}</strong>
                </el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
          </el-row>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
          <div
            style="text-align: center;margin-top:20px;font-size:12px;font-color:gary"
          >Copyright &copy; 上海臻广文化传媒有限公司</div>
        </el-scrollbar>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  methods: {}
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 72px;
    line-height: 72px;
    background: #202020;
    color: #fff;
    .logo {
      height: 72px;
      font-size: 22px;
      padding: 0px 12px 0px 12px;
      overflow: hidden;
      img {
        width: 150px;
        float: left;
        margin: 15px 18px 15px 0px;
      }
      .txt {
        position: relative;
        float: left;
        margin-left: 10px;
        font-size: 16px;
      }
    }
    .userInfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        img {
          width: 50px;
          height: 50px;
          margin: 11px 0px 11px 10px;
          float: right;
        }
      }
    }
  }
  .main {
    display: flex;
    position: absolute;
    top: 72px;
    bottom: 0px;
    overflow: hidden;
    .menu-expanded {
      flex: 0 0 210px;
      width: 210px;
    }
    .content-container {
				background: #DFDFDF;
				min-width: 900px;
				flex: 1;
				overflow-y: auto;
				padding: 20px;
				
			}
  }
}
</style>
