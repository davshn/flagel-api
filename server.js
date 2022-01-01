const app = require('./src/config/app.js');
const { conn } = require('./src/config/db.js');

conn.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});