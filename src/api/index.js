import http from '@/utils/requset'

//模拟接口调用
export const getData = () => {
  return http.get('/home/getdata')
}
