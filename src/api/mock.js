import Mock from 'mockjs'
import homeData from '@/api/homeMockData/home'
import userData from '@/api/homeMockData/user'

//定义mock请求拦截
Mock.mock('/api/home/getdata', homeData.getStatisticalData)

//用户列表数据
Mock.mock('/api/user/add','post', userData.createUser)
Mock.mock('/api/user/edit','post', userData.updateUser)
Mock.mock('/api/user/delete', userData.deleteUser)
Mock.mock( /api\/user\/getUser/, userData.getUserList)
