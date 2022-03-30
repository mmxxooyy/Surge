let body = JSON.parse($response.body);
body['result']['picUrl']=''
$done({body: JSON.stringify(body)});
