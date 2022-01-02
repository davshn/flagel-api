const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Post {
        id: Int!,
        body: String!,
        threadId:Int!
    }
    type Query {
        postsThread(threadId: Int): [Post]
    }
    type Mutation {
        createPost(body: String!,threadId:Int!):Post,
        deletePost(id: Int):Post,
    }

`);