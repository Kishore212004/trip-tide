const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;

const app = express();

// create a new Apollo server & pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// integrate Apollo server with the Express application as middleware
server.start().then(() => server.applyMiddleware({ app }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import mongoose connection
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌎 Now listening on port ${PORT}`));
});