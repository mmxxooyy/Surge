let data = JSON.parse($response.body);

// 删除 - 广告配置
delete data.ad_conf;

// 删除 - 底栏
// data.tab_conf = {};

// 删除 - 我的页面推广语
delete data.activity;

// 删除 - 我的-服务
data.settingServiceConfig.data = [];

delete data.tab_conf["tab_360Mall"];
data.tab_conf["tab_CloudMall"]["on"] = "1";
data.get_new_device_activity = {};
data.get_new_device_activity_copy = {};
data.video_cloud_banner = {};
data.video_cloud_card = {};
data.get_new_device_activity_copy = {};

$done({body: JSON.stringify(data)});
