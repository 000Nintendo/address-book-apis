const dotenv = require("dotenv");
dotenv.config();

const morgan = require('morgan')
const { ApolloServer } = require('apollo-server-express')
const { resolvers, typeDefs } = require("./graphql/apollo");
const mongo = require("./mongo");
const express = require("express");
// const { loggingPlugin } = require("./graphql/plugins/loggingPlugin");


const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    // loggingPlugin
  ],
});



const app = express();

/**
 * Setup helmet middleware for disabling
 * security vulnerabilities of express framework
 */

const isDevelopment = process.env.NODE_ENV === 'development'

// app.use(
//   helmet({
//     contentSecurityPolicy: !isDevelopment,
//     crossOriginEmbedderPolicy: !isDevelopment,
//   })
// );

app.use(morgan('common'))

app.use(
  express.json({
    limit: "1mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  })
);

module.exports.apollo = apollo;
module.exports.mongo = mongo;
module.exports.app = app;
