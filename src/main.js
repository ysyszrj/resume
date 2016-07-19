/**
 * Created by artemis_zrj on 2016/7/19.
 */
Vue = require("vue");
var resume_json = require("json!../resume.json");
var resume_data = resume_json.data;
new Vue({
    el:"#app",
    data:{
        resume:resume_data,
    }
})

