const Twit = require('twit');

module.exports = new Twit({
  consumer_key: process.env.TWCK,
  consumer_secret: process.env.TWCS,
  access_token: process.env.TWAT,
  access_token_secret: process.env.TWATS
});
