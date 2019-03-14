'use strict';
const _ = require('lodash');
const fs = require('fs');
const xml2js = require('xml2js');
const admin = require('firebase-admin');
const config = require('./config.json');


admin.initializeApp({
  credential: admin.credential.cert(config.serviceAccount),
  databaseURL: config.databaseURL
});

const db = admin.firestore();

var checkDb = () => {
  db.collection('posts').get().then(posts => {
    console.log('Database contains ' + posts.size + ' Posts');
    console.log('Database check complete...');
  });
};

var addPost = function(data) {
  var collection = db.collection('posts');
  return collection.add(data);
};

var parseFile = (filename) => {
  var parser = new xml2js.Parser();
  fs.readFile(__dirname + '/' + filename, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      parser.parseString(data, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          if (result.feed.entry) {
            checkDb();
            const posts = _.filter(result.feed.entry, (x) => {
              return x.id[0].includes('post');
            });
            console.log('Number of Blogger Posts = ' + posts.length);
            posts.forEach(post => {
              if (post.id[0].includes('post')) {
                addPost({
                  title: post.title[0]._,
                  content: post.content[0]._,
                  published: post.published[0],
                  updated: post.updated[0]
                });
              }
            });
          }
        }
      });
    }
  });
};

parseFile('blogger-backup.xml');