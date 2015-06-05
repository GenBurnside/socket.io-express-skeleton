#Socket.io messages from Express

This is a bare-bones Express API that uses socket.io to push notifications to a client HTML page.

In this example, ``index.html`` is listening for updates for a specific user ID (12345). When the client receives
event ``'12345'``, it performs an action when the message is ``'UserUpdated'`` or ``'PermissionUpdated'``. 

This could be used to trigger an update if a user's information or permission settings were changed outside of 
their current session.

In a real application, the user variable would be based off of a session or database value. This ensures that
the client only listens for socket.io messages related to the current user session.
