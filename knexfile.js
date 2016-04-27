module.exports = {
  development: {
   client: 'postgresql',
   connection: 'postgres://localhost/redditclone-app'
 },

 production: {
   client: 'postgresql',
   connection: process.env.DATABASE_URL
 }

};
