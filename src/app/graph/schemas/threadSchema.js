var { buildSchema } = require('graphql');

var schemas = buildSchema(`
    type Thread {
        id: Int!,
        title: String!,
    }
    type Query {
        allThreads: [Thread!]
        thread(id: Int): Thread
    }
    type Mutation {
        createThread(title: String!):Thread,
        deleteThread(id: Int):Thread,
    }

`);

module.exports = schemas;