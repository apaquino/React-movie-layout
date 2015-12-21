import express from 'express';
import path from 'path';

const app = express();
const PORT = 8888;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
  res.render("index");
});

// mount a graphql endpoint
// needs a schema
// create a folder to hold schema
// convention is in data

import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

app.use("/GraphQL", GraphQLHTTP({
  schema,
  graphiql: true
})
);
app.listen(PORT, function() {
  console.log("Node/Express server for GraphQL listening on port", PORT);
});
