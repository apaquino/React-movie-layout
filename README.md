# React Movie Layout - Example React Apps with Flux and Redux (relayjs & graphQL coming soon)
Master branch is done in vanilla Flux using API calls

See the with_redux branch for the redux implementation
```
git checkout with_redux
```

To start it assumes you have the following installed globally
```
npm install babel webpack webpack-dev-server -g
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
Lastly do the following:
```
npm start
```
You should have a dev server running on port 3333.

Open your browser and go to http://localhost:3333
