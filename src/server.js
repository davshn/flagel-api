const app = require('./config/app.js');
const { conn } = require('./config/db.js');

conn.sync({ force: true }).then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log('%s listening at 3001'); 
  });
});