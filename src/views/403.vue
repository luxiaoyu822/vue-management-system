<template>
    <div>
        您无权访问此页面
        <el-button @click="backHome">返回主页面</el-button>
    </div>
</template>、
<script>
export default{
    methods:{
        backHome(){
            this.$router.push('/home')
        }
    }
}
</script>