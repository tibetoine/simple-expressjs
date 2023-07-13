const express = require('express');
const app = express();
const port = 3000;

// Middleware pour analyser le corps des requêtes
app.use(express.json());

// Route POST
app.post('/api/post', (req, res) => {
  // Récupérer les données envoyées dans le corps de la requête
  const data = req.body;

  // Effectuer des opérations avec les données reçues
  // Par exemple, vous pouvez les enregistrer dans une base de données

  // Envoyer une réponse
  res.send('Données reçues avec succès');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
