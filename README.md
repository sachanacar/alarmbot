Alarmbot!
=========

Full tutorial on [Voxbone's blog](http://blog.voxbone.com/building-alarm-system-tessel-io-voxsms-api-5-minutes/)

#####1. Install the dependencies

```
    npm install
```

#####2. Change your VoxSMS credentials in app.js

````
  var api_login = 'login';
  var api_password = 'password';
  ``````

#####3. Start the application

```
    npm start
```    

#####4. Add your parameters to send a message in app.js

`````
var from = "+3228080438"; //a Voxbone number enabled for VoxSMS (format: +3200000)
var to = "3222222222"; //the destination number (format: 3200000)
var msg = "your message";
var dr = "all"; //Delivery reports - Accepted values: success, failure, all, none
`````
  
#####5. Structure

```
project
│   README.md      (this exact file)
│   package.json   (all the required app dependencies, including voxbone-voxsms npm and the tessel module)
|   app.js     	   (App logic: IR detection + send SMS)
│
└───/bin
    │   www 	   (this is where you can set the port for running the app, default is 3000)
```
