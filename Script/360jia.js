let data = JSON.parse($response.body);

// 删除 - 广告配置
delete data.ad_conf;

// 删除 - 底栏
delete data.tab_conf;

// 删除 - 我的页面推广语
delete data.activity;

// 删除 - 我的-服务
data.settingServiceConfig.data = [];

// 实验性去除
data.get_new_device_activity = {};
data.get_new_device_activity_copy = {};
data.video_cloud_banner = {};
data.video_cloud_card = {};

$done({body: JSON.stringify(data)});
