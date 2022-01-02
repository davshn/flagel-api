const { buildSchema } = require('graphql');

const schemas = buildSchema(`
    type Post {
        id: Int!,
        body: String!,
        threadId:Int!
    }
    type Query {
        post(id: Int): Post
    }
    type Mutation {
        createPost(body: String!,idThread:Int!):Post,
        deletePost(id: Int):Post,
    }

`);

module.exports = schemas;