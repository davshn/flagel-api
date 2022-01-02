const { buildSchema } = require('graphql');

module.exports = buildSchema(`
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