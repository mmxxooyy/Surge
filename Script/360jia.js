var data = JSON.parse($response.body);

// 删除 - 我的页面推广语
delete data.activity;

// 删除 - 底栏
data.tab_conf = {};

// 删除 - 广告配置
delete data.ad_conf;

data.video_cloud_banner.on = 0;

data.settingServiceConfig.data = [];

$done({ body: JSON.stringify(data) });
