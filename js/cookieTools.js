/*
保存cookie（添加）
参数：键
值
有限期（单位：多少天）
*/
function addCookie(key,value,dayCount,path,domain){
    let d = new Date();
    d.setDate(d.getDate()+dayCount);
    //escape():编码，中文和特殊字符支持
    let str = `${key}=${escape(value)};expires=${d.toGMTString()}`;
    if(path!=undefined){//path为路径
        str+=`;path=${path}`;
    }
    if(domain!=undefined){
        str+=`;domain=${domain}`;
    }
    document.cookie = str;
}

/*
获取cookie（查询）根据键获取值
参数：
键
返回值：值（键对应的值）
*/
function getCookie(key){
    var str = unescape(document.cookie);
    //1.分割成数组
    let arr = str.split(";");
    //2.循环arr
    for(var i in arr){
        if(arr[i].startsWith(key+"=")){
            let [,value] = arr[i].split("=");
            return value;
        }
    }
    return null;
}

/*
删除cookie(cookie不能直接删除，可以通过设置过期时间为过去进行删除)
参数：
键
返回值：无
*/
function removeCookie(key){
    addCookie(key,"",-1);
}