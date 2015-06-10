#Socket.IO messages from Express

This is a bare-bones Express API that uses socket.io to push notifications to a client HTML page.

In this example, ``index.html`` is listening for updates for a specific user ID (12345). When the client receives
event ``'12345'``, it performs an action when the message is ``'UserUpdated'`` or ``'PermissionUpdated'``. 

This could be used to trigger an update if a user's information or permission settings were changed outside of 
their current session.

In a real application, the user variable would be set from a session or database value. This ensures that
the socket.io client only listens for messages related to the current user session.

##Running this code
    npm install
    node app.js

Open ``index.html`` in a browser, and view the JS console.

Use a REST client (such as Postman) to make a ``PATCH`` request to ``http://localhost:3000/user/12345`` or ``http://localhost:3000/permission/12345``. You should see a ``UserUpdated`` or ``PermissionUpdated`` message in your browser's JS console.
