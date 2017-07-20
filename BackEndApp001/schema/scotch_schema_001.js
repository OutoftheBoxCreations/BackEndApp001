const _ = require('lodash');

const Authors = require('./sotch/authors'); // This is to make available authors.json file
const Posts = require('./scotch/posts'); // This is to make available post.json file

/* Here a simple schema is constructed without using the GraphQL query language. 
  e.g. using 'new GraphQLObjectType' to create an object type 
*/

let {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,  // This is used to create required fileds and arguments
  GraphQLSchema,  // This is the class we need to create the schema

} = require('graphql');

const AuthorType = new GraphQLObjectType({
    name: "Author",
    description: "This represents an Author",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        twitterHandle: { type: GraphQLString }
    })
});

const PostType = new GraphQLObjectType({
    name: "Post",
    description: "This represents a Post",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        body: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve: function (post) {
                return _.find(Authors, a => a.id == post.author_id);
            }
        }
    })
});

// This is the Root Query
const BlogQueryRootType = new GraphQLObjectType({
    name: 'BlogAppSchema',
    description: "Blog Application Schema Query Root",
    fields: () => ({
        authors: {
            type: new GraphQLList(AuthorType),
            //GraphQLList creates a type wrapper around other types that represents a list of those types.
            description: "List of all Authors",
            resolve: function () {
                return Authors
                //The function of 'resolve' is perform operations that involve data manipulation or transformation 
                //with a value returned at the end of the operation.
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            description: "List of all Posts",
            resolve: function () {
                return Posts
            }
        }
    })
});

// This is the schema declaration
const BlogAppSchema = new GraphQLSchema({
    query: BlogQueryRootType
    // If you need to create or updata a datasource, 
    // you use mutations. Note:
    // mutations will not be explored in this post.
    // mutation: BlogMutationRootType 
});

module.exports = BlogAppSchema;