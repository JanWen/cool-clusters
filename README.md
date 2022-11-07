# cool-clusters
Demo App for control-plane.io using React, Node.js and SQL.<br>
It simulates a Kubernetes management web app that provides CRUD operations for clusters and allows the user to list, inspect, update and delete them through the interface. <br>
The front-end is based on react and material-ui, while the back-end consists of an express.js server and an in memory sqlite database.
Eslint with eslint-config-fbjs is used for linting.

### front-end
## Setup
From project root:
```
cd frontend
npm install
npm start
```
## additional scripts
```
npm test
npm run lint
```
Note: The package.json of the frontend folder contains the setting `"proxy": "http://localhost:4000"`
which must point to the port the backend is running on. (Default: 4000)


### back-end
```
cd backend
npm install 
npm start
```
## additional scripts
npm run lint

`const port = 4000;` in `main.js` file controls the port that express listens on.
The SQLite database is in memory and seeded with example data when the backend is started.
