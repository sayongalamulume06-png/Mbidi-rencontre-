const express = require('express');
const app = express();
const { ExpressPeerServer } = require('peer');
const http = require('http');
const path = require('path'); // Nécessaire pour localiser le fichier html

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true
});

app.use('/peerjs', peerServer);

// Sert le fichier index.html quand on visite la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
