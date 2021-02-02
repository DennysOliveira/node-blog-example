# Node.js Blog Example with MVC Principles


This is a simple blog application that enables the user to create, read and delete a blog post.

It was built upon Module-View-Controller principles using Node.js, Express and EJS.
EJS is used to control the views and interact with dynamic information as Express and Node are used to handle the back-end information, passin on CRUD requests to the database.
I used MongoDB NoSQL database directly from MongoDB Atlas to store the 'post' model at its 'blogs' collection.
You can create Posts at New Post page, which will make a POST request to the Node server, asking for this instanced post to be saved.
Any post created will be saved upon submit and will be instantly available for GET requests at the "homepage" a.k.a. feed.
You can also freely delete posts after opening their pages, where their information will be available to read.

This whole application is deployed at Heroku for a live preview. It may take a few seconds to load the first time, as Heroku prevents resource waste making those 'hobby' servers asleep.

Live Preview deployed at Heroku: https://node-blog-example.herokuapp.com/blogs
