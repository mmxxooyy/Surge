var json = JSON.parse($response.body);

// 删除 - 我的页面推广语
delete json.activity;

// 删除 - 底栏
delete json.tab_conf;

// 删除 - 广告配置
delete json.ad_conf;

$done({ body: JSON.stringify(json) });
