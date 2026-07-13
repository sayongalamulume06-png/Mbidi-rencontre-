const express = require('express');
const app = express();
const { ExpressPeerServer } = require('peer');
const http = require('http');

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true
});

app.use('/peerjs', peerServer);

app.get('/', (req, res) => {
    res.send('Bienvenue sur Mbidi Rencontre ! Le serveur est prêt pour les appels.');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
