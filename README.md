# user_authentication
 ![MyImage](https://scontent.ftpe3-2.fna.fbcdn.net/v/t39.30808-6/313327468_5532032306891736_3952999336257891590_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=TI3s3YcnlLsAX_MVUHZ&_nc_ht=scontent.ftpe3-2.fna&oh=00_AfCGCswd-ECoiiw7JziNNhcUog0v21mEEEoPdqIYNs1Zmw&oe=635F7CF8)
## Introduction
  Simple user list login web application for understanding login/out authentication procedure
## Features
 * login/out
## Getting started
 1. Make sure to install node.js and npm

 2. Clone this code to your local repository

 3. Change direction to the file and enter the following code
```
npm install
```
 4. Then set MONGODB_URI as a environment variable for MongoBD connection
```
export MONGODB_URI="Your MongoDB connection URL"
```
 5. After that, enter the following code, and check "'userSeeder done!"
```
npm run seed
```
 6.Then enter foloowing code
```
npm run start
```
 7. Finally, check whether the following message show up or not to make sure the server get started
```
Express is listening on localhost:3000
```
 8. Open your brower and enter the link http://localhost:3000 to start exploring the website!

 9. Press control + c to end the server
 ## Development Tools
    
* body-parser: 1.20.1
* express: 4.18.2
* express-handlebars: 3.0.0
* mongoose: 6.7.0
* Node.js: 16.7.0
* Mongo DB
* express-session: 1.17.3

