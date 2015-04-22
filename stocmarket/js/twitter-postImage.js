var oauth = require('oauth');
var fs = require('fs');
var message="hi";
var filePath = 'logo.png';
var oauth_access_token = '3029966236-mlYaCy8iGlwsqlD1Renz9G2CpEpF3MVl5Mgbu12';		//Access Token
var oauth_access_token_secret = 'VmNGWIKqAFl7W0f5wc1Jvij4QxjMs8zusIeg6v5EBecrW' ;	//Token Secret
var client = new oauth.OAuth("",
    "",
    'EgT5UoXUAmzw5RLFYuqTnDkQd',		// Consumer Key
    'gqw7xvDjmz4cXLXn8vYE9zkwUrLQcCyGBiNCIMTzqPTmusksue',		//Consumer Secret
    "1.0",
    '',
    "HMAC-SHA1");

client.post("https://upload.twitter.com/1.1/media/upload.json",  oauth_access_token, oauth_access_token_secret, {media:fs.readFileSync(filePath).toString("base64")} ,"" , function (e, data, res){
    if (e) {
        console.error(e);
    }else {
        try{
            data = JSON.parse(data);
        }catch (e){
            console.error("Error Json : " + e);
        }
        console.log(data.media_id);

        client.post("https://api.twitter.com/1.1/statuses/update.json",   oauth_access_token, oauth_access_token_secret, {status:message,media_ids:[data.media_id_string]}, "", function (e, data, res){
            if (e) {
                console.error(e);
            }else {
                console.log("Success");
            }
        });
    }
});