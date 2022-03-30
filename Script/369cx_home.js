let body = JSON.parse($response.body);
body['result']['banner']=[{}];
$done({body: JSON.stringify(body)});
