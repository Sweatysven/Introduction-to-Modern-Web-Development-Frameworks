# Introduction-to-Modern-Web-Development-Frameworks
AAU Course Introduction, introducing working with Node, AngularJS, MongoDB and Python Flask to create websites.

## todoapp-front
Creating a simple todo application on a website) - no database, so your todos are NOT being saved.

Angular-cli (Bootstrap added via npm)
Navigate to my-app and then in the command prompt write: ng serve --open

Inspiration from this site:
https://www.youtube.com/watch?v=Gx6F69YJOCo&index=1&list=LLmwKAsh3VztVJkTkg_S2jOQ&t=2235s

## todoapp-front-back
(Creating a simple todo application on a website) - now with a database, where your todos are now being saved.

NodeJS app (MongoDB)
Navigate to my-app and then in the command prompt write nodemon server.js
You need to have MongoDB running before running the aforementioned "nodemon server.js":
1. Find where you have install your MongoDB server (eg. C:Program Files ....)
2. Locate the mongod.exe file in the bin folder
3. Create a new folder somewhere in your Documents folder (eg. This PC/Documents ...)
4. Name this folder "mongodb", and inside this folder, name another new folder "data".
5. Open command prompt and type the following to make your mongodb server in (eg. This PC/Documents ...) to save its data in (eg. This PC/Documents/mongodb/data): 

mongod --dbpath ~/path/to/your/app/data
(this needs to be called inside the your bin folder in your mongodb server (eg. C:Program Files ....))

Then open MongoDB Compass and connect to the default localhost. Now run the website: nodemon server.js

Inspiration for this site:
https://www.youtube.com/watch?v=HakOBAbIfug&index=3&list=LLmwKAsh3VztVJkTkg_S2jOQ&t=0s

## python-flask-app
(Creating a simple website, where the user as a start needs to Register to login to check out the website content)

Inspiration for this site:
https://www.youtube.com/watch?v=zRwy8gtgJ1A&index=2&list=LLmwKAsh3VztVJkTkg_S2jOQ&t=2s
