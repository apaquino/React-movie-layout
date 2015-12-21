import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat
} from 'graphql';

import fetch from 'isomorphic-fetch';
import KEYS from "../utils/KEYS";
const SOURCE = `http://api.themoviedb.org/3/discover/movie?api_key=${KEYS.API_KEY}&year=2015&sort_by=revenue.desc`;

// movie type
// all fields returned by the API when called from the client
// from the client just call what you want

let movieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    poster_path: { type: GraphQLString},
    adult: { type: GraphQLBoolean},
    overview: { type: GraphQLString},
    release_date: { type: GraphQLString},
    id: { type: GraphQLID},
    original_title: { type: GraphQLString},
    original_language: { type: GraphQLString},
    title: { type: GraphQLString},
    backdrop_path: { type: GraphQLString},
    popularity: { type: GraphQLFloat},
    vote_count: { type: GraphQLInt},
    video: { type: GraphQLBoolean},
    vote_average: { type: GraphQLFloat},
  })
});

// define query GraphQLObjectType
// root level is movies, the fields is an array of type movieType

let query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    movies: {
      type: new GraphQLList(movieType),
      resolve: () => {
        return fetch(SOURCE)
          .then(function(response) {
            return response.json();
          })
          .then(function(json) {
            return json.results;
          });
      }
    }
  })
});

let schema = new GraphQLSchema({
  query
});

export default schema;
