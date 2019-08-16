import config from './config.js'
import * as Mock from './mock.js'

let util = {
    isDEV:config.isDev,
    log(){
        this.isDEV&&console.log(...arguments)
    },
    alert(title='提示',content=config.defaultAlertMessage){
        if('object'===typeof content){
            content=this.isDEV&&JSON.stringify(content)||config.defaultAlertMessage
        }
        //微信弹出框
        wx.showModal({
            title:title,
            content:content
        })
    },
    setStorageData(key,value='',cd){
        //数据存储到本地缓存
        wx.setStorage({
            key:key,
            data:value,
            success:()=>{
                cd && cd()
            }
        })
    },
    getStorageData(key,cd){
        wx.getStorage({
            key:key,
            success:(res)=>{
                cd && cd()
            }
        })
    },
    request(opt){
        let {url,data,header,method,dataType,mock=false}=opt
        let self=this
        let p= new Promise((resolve,reject)=>{
            if(mock){
                let res={
                    statusCode:200,
                    data:Mock[url]//Mock['list']
                }
                if(res&&res.statusCode==200&&res.data){
                    // console.log(res)
                    resolve(res.data)
                }else{
                    self.alert('提示',res)
                    reject(res)
                }
            }else{
                wx.request({
                    url:url,
                    data:data,
                    header:header,
                    method:method,
                    dataType:dataType,
                    success:(res)=>{
                        if(res&&res.statusCode==200&&res.data){
                            resolve(res)
                        }else{
                            self.alert('提示',res)
                            reject(res)
                        }
                    },
                    fail:(err)=>{
                        self.log(err)
                        self.alert('提示',err)
                        reject(err)
                    }
                })
            }
        })
        // console.log(p)
        return p
    }
}
export default util