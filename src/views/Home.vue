<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="user">
            <img src="@/assets/images/user.jpg" alt="" />
            <div class="user-info">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
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
      <el-col :span="16">
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
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'oppo',
          todayBuy: 99,
          monthBuy: 341,
          totalBuy: 991,
        },
        {
          name: 'vivo',
          todayBuy: 128,
          monthBuy: 312,
          totalBuy: 879,
        },
        {
          name: '苹果',
          todayBuy: 164,
          monthBuy: 425,
          totalBuy: 1026,
        },
        {
          name: '小米',
          todayBuy: 145,
          monthBuy: 372,
          totalBuy: 999,
        },
        {
          name: '三星',
          todayBuy: 171,
          monthBuy: 541,
          totalBuy: 1323,
        },
        {
          name: '华为',
          todayBuy: 112,
          monthBuy: 422,
          totalBuy: 1432,
        },
      ],
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
}
</script>
<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e3e3;
  margin-bottom: 20px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .user-info {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
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
    font-size: 14px;
    line-height: 28px;
    color: #999999;
    .info {
      width: 70px;
      margin-left: 60px;
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
    margin-bottom: 20px;
  }
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: white;
  }
  .detail {
    display: flex;
    margin-left: 15px;
    flex-direction: column;
    justify-content: center;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc {
      font-size: 14px;
      text-align: center;
      color: #999999;
    }
  }
}
</style>
