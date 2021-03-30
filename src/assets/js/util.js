Date.prototype.getFormatStr = function(type){
    if(type == 1){
        return this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate();
    }else if(type == 2){
        return this.getFormatStr(1) + ' ' +
             this.getHours() + ':' + this.getMinutes() + ':' + this.getSeconds()
    }
}


export function getCookie(key, cookieStr){
    let arr = cookieStr.split(";")
    let val
    let flag = false
    
    arr.forEach(s => {
        let arr_tmp = s.split("=")
        if(arr_tmp[0].trim() == key){
            val = arr_tmp[1]
            flag = true
        }
    })

    if(flag)
        return val
    else
        return -1
}

