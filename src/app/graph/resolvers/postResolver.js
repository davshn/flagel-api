const { Post } = require('../../../config/db');

const resolver = {

    createPost: async ({body,threadId}) => {
        try{
            const newPost = await Post.create({
                body: body,
                threadId:threadId,
            })
            return newPost;
        }
        catch(e){   
            console.log("No fue agregada la respuesta a la base de datos");
        }
    
    },
};

module.exports = resolver;
