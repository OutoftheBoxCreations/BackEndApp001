/* eslint no-underscore-dangle: off*/
/* eslint "arrow-body-style": off */

import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import USER from './models/user';
import SKILL from './models/skill';
import LEVEL_SKILL from './models/levelSkill';

const User = new GraphQLObjectType({
  name: 'User',
  description: 'Represents user',
  fields: () => ({
    _id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    role: { type: GraphQLString }
  })
});

const Query = new GraphQLObjectType({
  name: 'ProfileSchema',
  description: 'Root of the Profile',
  fields: () => ({
    helloQuery: {
      type: GraphQLString,
      description: 'Our first query field!',
      resolve: () => {
        return 'Hello from GraphiQL';
      }
    },
    users: {
      type: new GraphQLList(User),
      description: 'Netguru members',
      resolve: () => {
        return USER.find({}, (err, res) => {
          return res;
        });
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;