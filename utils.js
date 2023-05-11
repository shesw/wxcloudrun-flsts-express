var SinaCloud = require('scs-sdk');
//全局生效:
SinaCloud.config.loadFromPath('./config.json');

var bucket_name = "music-store"

module.exports = {

    listObj(prefix, onError, onSucess) {
        var s3 = new SinaCloud.S3();
        var params = {
            Bucket: bucket_name, //required
            Delimiter: '/', //用'/'折叠
            Marker: '', //分页标签
            MaxKeys: 100, //最大成员数
            Prefix: prefix //按前缀查询
        };
        s3.listObjects(params, function (err, data) {
            if (err)
                onError(err)
            else {
                onSucess(data)
            }
        });
    },

    getUrl(s3, key, res) {
        // This URL will expire in one minute (60 seconds)
        var params = {
            Bucket: 'music-store',
            Key: key,
            Expires: 60
        };
        var url = s3.getSignedUrl('getObject', params);
        res.send(url)
    },




}