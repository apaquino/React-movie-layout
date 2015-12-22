import express from 'express';
import path from 'path';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

const app = express();
const PORT = 8888;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
  res.render("index");
});

app.use("/GraphQL", GraphQLHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log("Node/Express server for Flux/GraphQL app.  listening on port", PORT);
});
