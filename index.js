// File: index.js
const express = require('express');
const { verifyKeyMiddleware, InteractionResponseType, InteractionType } = require('discord-interactions');

const app = express();
app.use(express.json());

// Ganti dengan Public Key dari Discord Developer Portal Anda
const PUBLIC_KEY = 'MASUKAN_PUBLIC_KEY_ANDA_DISINI'; 

app.post('/interactions', verifyKeyMiddleware(PUBLIC_KEY), async (req, res) => {
  const interaction = req.body;

  if (interaction.type === InteractionType.PING) {
    return res.send({
      type: InteractionResponseType.PONG,
    });
  }

  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    // Logika jika user mengetik command
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: 'Halo! Perintah diterima.',
      },
    });
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));
