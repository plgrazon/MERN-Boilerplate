require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

const url = process.env.DB_URL;

const db = {
  database: null,

  initializeClient: (callback) => {
    MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
      this.database = client.db('myProject');
      if (err) {
        callback(err);
      }
      console.log('Connected to database');
      this.database.createCollection('myCollection', (err, data) => {
        if (err) {
          console.log('Failed to create collection ', err);
        }
        console.log('Created collection');
      });
    });
  },

  getClient: () => {
    return this.database;
  }
};

module.export = {
  db
};
