/**
 * Created by Administrator on 2016/10/19.
 */
module.exports = {
    extry:"cmm/c.js",//需要打包的文件路径
    output:{
        path:"build/",  //打包后的文件路径
        filename:"bundle.js"//打包文件名
    },
    module:{
        loaders:[
            {test:/.scss$/,loaders:["style","css",""]}
        ]
    }
}