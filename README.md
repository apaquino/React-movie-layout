# React Movie Layout - Example React Apps with Flux and Redux and GraphQL (relayjs coming soon)

Master branch is done in vanilla Flux using API calls

See the with_graphql branch for the flux with graphql implementation
```
git checkout with_graphql
```

# React Movie Layout - Example React Apps with Flux with GraphQL API server (other branches with vanilla Flux and Redux).

Master branch is done in vanilla Flux using API calls


See the with_redux branch for the redux implementation
```
git checkout with_redux
```

To start it assumes you have the following installed globally
```
npm install babel webpack -g
```
Then do the following:
```
npm install
```

You need to provide your own API key for themoviedb.com API service

Then you need to manually create a KEY.js file in the ./utils directory.

example:

```
let KEYS = {
  API_KEY: "YOUR KEY HERE"
}

export default KEYS;
```
Lastly do the following in two different terminal sessions:

To start the node server
```
npm start
```

To run webpack and watch for updates to re-build
```
npm run devbuild
```
You should have a dev server running on port 8888.

Open your browser and go to http://localhost:8888
