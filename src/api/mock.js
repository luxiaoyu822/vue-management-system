import Mock from 'mockjs'
import homeData from '@/api/homeMockData/home'

//定义mock请求拦截
Mock.mock('/api/home/getdata', homeData.getStatisticalData)
