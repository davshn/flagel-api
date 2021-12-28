const app = require('./src/app.js');
const { conn } = require('./src/models/db.js');

conn.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});