import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';


const app = express();
const PORT = 8888;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
