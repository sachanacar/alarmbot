var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Tessel dependencies
var tessel = require('tessel');
var infraredlib = require('ir-attx4');
var infrared = infraredlib.use(tessel.port['A']);


//SMS sependencies
var Voxbone = require('voxbone-voxsms');
var api_login = 'login';
var api_password = 'password';
var voxbone = new Voxbone({
apiLogin: api_login,
apiPassword: api_password
});

//SMS Settings
var from = "+3228080438"; //a Voxbone number enabled for VoxSMS (format: +3200000)
var to = "3222222222"; //the destination number (format: 3200000)
var dr = "none"; //Delivery reports - Accepted values: success, failure, all, none

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//That's your app!!
infrared.on('data', function(data) {
  // If we get data, print it out...
  console.log("Received RX Data: ", data);

  //and send an SMS!
  var msg = "Hey! Someone’s in your house!";
  var fragref = voxbone.createFragRef();
  voxbone.sendSMS(to, from, msg, fragref, dr);
});


module.exports = app;
