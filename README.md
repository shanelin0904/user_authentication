# user_authentication
 ![MyImage](https://scontent.frmq4-2.fna.fbcdn.net/v/t39.30808-6/330633877_585220299861449_4301901885888047013_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=rdG6a5Ch_eAAX8BEfDI&_nc_ht=scontent.frmq4-2.fna&oh=00_AfD7PC4V234VeqjEwoGKdGn4jlCJZ94Kwyjqt_mgImwX_Q&oe=63F33391)
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
 6. Then enter foloowing code
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

