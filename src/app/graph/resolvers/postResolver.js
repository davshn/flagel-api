const { Post } = require('../../../config/db');

const resolver = {
    postsThread: async ({threadId}) => {
        try{
            const dBInfo = await Post.findAll({
                where: {
                    threadId: threadId
                }
            })
            return dBInfo;
        }
        catch(e){   
            console.log("No se encontraron respuestas");
        }
    
    },
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
