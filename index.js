require('dotenv').config();
const mongoose = require('mongoose');
require('./db');
const Song = require('./models/song');
const fastify = require('fastify')({
    logger: false,
});

fastify.post('/song', async (req, reply) => {
    if (req.headers.authorization !== process.env.AUTH) return reply.status(401).send('unauthorized')
    // Check if the body is correct
    if (!req.body.title || !req.body.uri || !req.body.lyrics) return reply.status(422).send('Incorrect body')
    Song.findOne({'uri': req.body.uri}, function (err, docs) {
    if (err) {
        throw new Error(err.stack);
    };
    if (docs) {
        return;
    } else {
    const song = new Song({
      _id: mongoose.Types.ObjectId(),
      title: req.body.title,
      uri: req.body.uri,
      lyrics: req.body.lyrics,  
    });
    song.save()
    }
    });
    reply.send('success')
    
})
  
  fastify.listen(process.env.PORT, function (err, address) {
      if (err) {
          throw new Error(err.stack)
      }
    fastify.log.info(`listening on ${address}`)
  })