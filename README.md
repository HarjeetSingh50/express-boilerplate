# express-boilerplate

This is a express boilerplate with express 4.16 version. It includes multiple environment configuration, routing, swagger doucmentation, joi validation.

## Steps to start

1. Take clone of the repo.
2. rename demo.env.js to env.js.
3. In config.js file, you can create as many environments as you wish. Make sure env.js file's instance key is present as an environment object in config.js
   - For example, if instance key in env.js has value `local`, make sure config.js file includes a key `local` with the following structure
     local: {
     host: 'localhost',
     port: 5000,
     protocol: "http"
     }
4. npm install // Install all dependencies
5. npm start
6. Check the server running at http://localhost:5000/
7. Check api documentation at http://localhost:5000/api-docs
