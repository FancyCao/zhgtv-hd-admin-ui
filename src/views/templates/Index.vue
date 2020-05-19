<template>
  <el-row class="container">
    <el-timeline>
      <el-timeline-item
        v-for="(updateLog,index) in updateLogs"
        :key="index"
        :icon="updateLog.icon"
        :type="updateLog.type"
        :color="updateLog.color"
        :size="updateLog.size"
        :timestamp="updateLog.timestamp"
        placement="top"
      >
        <el-card>
          <h4>{{updateLog.content}}</h4>
          <p v-html="updateLog.text"></p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      name: "首页",
      updateLogs: [
        {
          color: "#0bbd87",
          timestamp: "2020-5-12",
          content: "臻广活动管理系统1.0.0",
          text: "1、项目搭建"
        }
      ]
    };
  },
  methods: {},
  created: function() {
    console.log(this.name + "create");
  },
  mounted: function() {
    console.log(this.name + "mounted");
  },
  updated: function() {
    console.log(this.name + "updated");
  },
  destroyed: function() {}
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin-top: 0px;
  padding-top: 20px;
  padding-right: 20px;
  min-height: 500px;
  min-width: 900px;
  background-color: #fff;
}
</style>
