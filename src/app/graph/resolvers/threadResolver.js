const { Thread } = require('../../../config/db');

const resolver = {
    allThreads: async () => {
        try{
            const dBInfo= await Thread.findAll()
            return dBInfo;
        }
        catch(e){   
            console.log("No hay info");
        }
    
    },
    
    createThread: async ({title}) => {
        try{
            const newThread = await Thread.create({
                title:title,
            })
            return newThread;
        }
        catch(e){   
            console.log("No fue agregado el tema a la abse de datos");
        }
    
    },
};

module.exports = resolver;
