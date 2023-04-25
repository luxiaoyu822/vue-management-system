import http from '@/utils/requset'

//模拟接口调用
export const getData = () => {
  return http.get('/home/getdata')
}

export const getUser = params => {
  console.log(params)
  return http.get('/user/getUser', params)
}

export const addUser = data => {
  return http.post('/user/add', data)
}

export const editUser = data => {
  return http.post('/user/edit', data)
}

export const deleteUser = data => {
  return http.post('/user/delete', data)
}

export const getMenu = data => {
  return http.post('/permission/getMenu', data)
}
