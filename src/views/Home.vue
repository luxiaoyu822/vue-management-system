<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right: 10px">
        <el-card class="box-card">
          <div class="user">
            <img src="@/assets/images/user.jpg" alt="" />
            <div class="user-info">
              <p class="name">{{role}}</p>
              <p class="access">{{role==='administrator'?'超级管理员':'普通用户'}}</p>
            </div>
          </div>
          <div class="login-info">
            <p>
              <span class="label">上次登录时间：</span
              ><span class="info">2023-4-20</span>
            </p>
            <p>
              <span class="label">上次登录地点：</span
              ><span class="info">南京</span>
            </p>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              v-for="(value, key) in tableLabel"
              :prop="key"
              :label="value"
              width="auto"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" style="padding-left: 10px">
        <div class="order-num">
          <el-card
            v-for="item of countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="price">￥{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 280px">
          <div ref="echartsline" style="height: 280px"></div>
        </el-card>
        <div class="graph">
          <el-card style="height: 260px">
            <div ref="echartsBar" style="height: 260px"></div>
          </el-card>
          <el-card style="height: 260px">
            <div ref="echartsPie" style="height: 240px"></div
          ></el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getData } from '@/api'
import * as echarts from 'echarts'
import Cookie from 'js-cookie'
export default {
  data() {
    return {
      tableData: [],
      role:'',
      tableLabel: {
        name: '品牌',
        todayBuy: '今日销量',
        monthBuy: '月度销量',
        totalBuy: '总销量',
      },
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9',
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef',
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9',
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef',
        },
      ],
    }
  },
  mounted() {
    getData().then(({ data }) => {
      const { tableData } = data.data
      this.tableData = tableData
      const echartsLine = echarts.init(this.$refs.echartsline)
      var echartsLineOption = {}
      const { orderData, userData, videoData } = data.data

      const xAxisLine = Object.keys(orderData.data[0])
      const xAxisLineData = {
        data: xAxisLine,
      }
      echartsLineOption.xAxis = xAxisLineData
      echartsLineOption.yAxis = {}
      echartsLineOption.legend = xAxisLineData
      echartsLineOption.series = []
      xAxisLine.forEach(item => {
        echartsLineOption.series.push({
          name: item,
          data: orderData.data.map(data => data[item]),
          type: 'line',
        })
      })

      echartsLine.setOption(echartsLineOption)

      const echartsBar = echarts.init(this.$refs.echartsBar)
      const echartsBarOption = {
        legend: {
          textStyle: {
            color: '#333',
          },
        },
        grid: {
          left: '20%',
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: userData.map(item => item.date),
          axisLine: {
            lineStyle: {
              color: '#17b3a3',
            },
          },
          axisLabel: {
            interval: 0,
            color: '#333',
          },
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3',
              },
            },
          },
        ],
        color: ['#2ec7c9', '#b6a2de'],
        series: [
          {
            name: '新增用户',
            data: userData.map(item => item.new),
            type: 'bar',
          },
          {
            name: '活跃用户',
            data: userData.map(item => item.active),
            type: 'bar',
          },
        ],
      }
      echartsBar.setOption(echartsBarOption)

      const echartsPie = echarts.init(this.$refs.echartsPie)
      const echartsPieOption = {
        tooltip: {
          trigger: 'item',
        },
        color: [
          '#0f78f4',
          '#dd536b',
          '#9462e5',
          '#a6a6a6',
          '#e1bb22',
          '#39c362',
          '#3ed1cf',
        ],
        series: [
          {
            data: videoData,
            type: 'pie',
          },
        ],
      }
      echartsPie.setOption(echartsPieOption)
    })

    this.role=Cookie.get('role')
  },
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/variables.scss';
.user {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: $padding * 2;
  border-bottom: 1px solid #e6e3e3;
  margin-bottom: $margin * 2;
  img {
    width: $width * 15;
    height: $height * 15;
    border-radius: 50%;
  }
  .user-info {
    .name {
      font-size: 32px;
      margin-bottom: $margin;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  p {
    display: flex;
    justify-content: center;
    font-size: $fontSize;
    line-height: $fontSize * 2;
    color: #999999;
    .info {
      width: $width * 7;
      margin-left: $margin * 6;
    }
  }
}

.order-num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .el-card {
    width: 32%;
    padding: 0;
    margin-bottom: $margin * 2;
  }
  .icon {
    width: $width * 8;
    height: $height * 8;
    font-size: 30px;
    text-align: center;
    line-height: $height * 8;
    color: white;
  }
  .detail {
    display: flex;
    margin-left: $margin * 1.5;
    flex-direction: column;
    justify-content: center;
    .price {
      font-size: 30px;
      margin-bottom: $margin;
      line-height: $height * 3;
      height: $height * 3;
    }
    .desc {
      font-size: 14px;
      text-align: center;
      color: #999999;
    }
  }
}

.graph {
  margin-top: $margin * 2;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 48%;
  }
}
</style>
