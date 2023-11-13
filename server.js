// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.
// Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (array di stringhe)
// Creiamo poi una rotta /posts che ritorni tramite content negotiation la lista dei post, da un array locale. Ritorniamo i dati sotto forma di json e html stampando una semplice ul.
// Le rotte relative ai post dovranno chiamare la funzione relativa dal controller dedicato controllers/posts.js
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare le immagini scrivendo manualmente il link nel browser.



// importiamo express e creiamo la sua istanza
const express = require('express');
const app = express();

// importiamo dotenv e lo installiamo
const dotenv = require("dotenv");
dotenv.config();

// importiamo il log 
const { log } = require("console");

// definiamo con una variabile la porta
const port = process.env.PORT || 3001;

// configuro i file statici
app.use(express.static("public"));

// importiamo il controller
const postsController = require('./controllers/post');



// Rotta principale
app.get('/', (req, res) => {
  res.send('<h1 style="text-align:center">Benvenuto nel mio blog!</h1>');
});

app.get("/post", postsController.index)

// Avvia il server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
