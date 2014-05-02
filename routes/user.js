var request = require('request');

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.image = function(req, res){
    var img = "https://www.google.com/images/srpr/logo11w.png";

    request(img).pipe(res);
};
