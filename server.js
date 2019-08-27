import express from 'express';
import {
  createServer
} from 'http';
const request = require('request');
import {
  graphqlExpress,
  graphiqlExpress
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import {
  schema
} from './src/schema';

const PORT = 4000;
const server = express(); // initialize node js express server

server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

// GraphQL Schema Documentation provided by graphiql
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphqldoc'
}));

server.use('/graphqldoc', bodyParser.json(), graphqlExpress(req => {
  return {
  schema
}
}));

// Wrap the Express server using 
const ws = createServer(server);
ws.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);
});