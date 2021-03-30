import axios from 'axios'

export function request(config){
    //创建axios实例 
    const instance = axios.create({
        baseURL:'/reflex_1',
        headers: {
            'Cache-Control': 'no-cache'
        }
    })

    //发送真正的网络请求
    return instance(config)
}
