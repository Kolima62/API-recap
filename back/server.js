import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Notre api écoute sur le port ${port}`);
});

app.get('/test', (req, res) => {
  const test = { id: 5, titre: 'Mon titre' }; // => stockage
  res.send(test);
});

app.post('/test', (req, res) => {
  console.log(req.body);
  const user = req.body;
  // stockage BDD [traitement de l'object]
  req.body.message = 'Votre user a bien été créé';
  res.send(req.body);
});
