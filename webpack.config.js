/**
 * Created by artemis_zrj on 2016/7/19.
 */
module.exeports = {
    entry:"./src/app.js",
    output:{
        "path" :"dist",
        filename:"build.js"
    },
    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    }
}
