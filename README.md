This is a proof-of-concept for using socket.io to push notifications to a client from an Express API.

In this example, index.html is listening for updates for a specific user ID (12345). When the client receives
'12345' as the event, it performs an action when the message is 'UserUpdated' or 'PermissionUpdated'. 

This could be used to trigger an update if a user's information or permission settings were changed outside of 
their current session.
