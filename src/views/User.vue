<template>
  <div class="manage">
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="50%"
    >
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        :inline="true"
        label-width="80px"
        autocomplete="off"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请输入性别">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            type="date"
            placeholder="请选择日期"
            v-model="form.birth"
            style="width: 100%"
            value-format="yyyy-MM-DD"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="handleAdd">+ 新增</el-button>
    </div>
    <div class="manage-table">
      <el-table :data="tableData" height="90%" style="width: 100%">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">
            <span>{{ scope.row.sex == 1 ? '男' : '女' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="birth" label="出生日期"></el-table-column>
        <el-table-column prop="addr" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="medium" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="medium"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="manage-pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="handlepage"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { getUser, addUser, editUser, deleteUser } from '@/api'
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入姓名',
          },
        ],
        age: [
          {
            required: true,
            message: '请输入年龄',
          },
        ],
        sex: [
          {
            required: true,
            message: '请选择性别',
          },
        ],
        birth: [
          {
            required: true,
            message: '请选择日期',
          },
        ],
        addr: [
          {
            required: true,
            message: '请输入地址',
          },
        ],
      },
      tableData: [],
      dialogType: 0, //自定义0表示新增用户，1为编辑用户，默认为0
      dialogTitle: '',
      total: 0, //数据总条数
      pageData: {
        page: 1,
        limit: 10,
      },
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    submit() {
      this.$refs.form.validate(vali => {
        if (vali) {
          console.log(this.form)
          if (this.dialogType === 0) {
            addUser(this.form).then(res => {
              console.log(res)
              this.getList()
            })
          } else {
            editUser(this.form).then(res => {
              console.log(res)
              this.getList()
            })
          }
          this.dialogVisible = false
        }
      })
    },
    handleAdd() {
      this.dialogVisible = true
      this.dialogType = 0
      this.dialogTitle = '新增用户'
    },
    getList() {
      getUser({ params: this.pageData }).then(({ data }) => {
        this.tableData = data.list
        this.total = data.count || 0
      })
    },
    handleClose() {
      this.$refs.form.resetFields()
      this.dialogVisible = false
      this.$refs.form.resetFields()
    },
    cancel() {
      this.handleClose()
    },
    handleEdit(data) {
      this.dialogVisible = true
      this.dialogType = 1
      this.dialogTitle = '编辑用户'
      this.form = JSON.parse(JSON.stringify(data))
    },
    handleDelete(data) {
      this.$confirm('请确认是否要删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          deleteUser({ id: data.id }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!',
            })
            this.getList()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    handlepage(val) {
      console.log(val)
      this.pageData.page = val
      this.getList()
    },
  },
}
</script>
<style lang="scss" scoped>
.manage {
  height: 90%;
  .manage-table {
    height: 80%;
    .manage-pagination {
      margin-top: 10px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
