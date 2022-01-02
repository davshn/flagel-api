const { Thread } = require('../../../config/db');

const resolver = {
    allThreads: async () => {
        try{
            const dBInfo= await Thread.findAll()
            return dBInfo;
        }
        catch(e){   
            console.log("No hay informacion");
        }
    
    },
    thread: async ({id}) => {
        try{
            const dBthread= await Thread.findByPk(id)
            return dBthread;
        }
        catch(e){   
            console.log("Ningun tema corresponde a ese id");
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
            console.log("No fue agregado el tema a la base de datos");
        }
    
    },
};

module.exports = resolver;
