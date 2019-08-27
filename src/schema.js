import {
  makeExecutableSchema
} from 'graphql-tools';
import {
  resolvers
} from './resolvers';
import {
  typeDef
} from './typedef';

const typeDefs = typeDef;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
export {
  schema
};