/* Usando l’array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l’entità  post.
  All’interno creare le seguenti rotte:
  / - index: ritornerà un html con una ul che stamperà la lista dei post

  /:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post
  /create - create: ritornerà un semplice html con un h1 con scritto Creazione nuovo post e nel caso venga richiesta una risposta diversa da html lancerà un errore 406
  /:slug/download - download: dovrà far scaricare l’immagine del post rappresentato dallo slug. Attenzione, se lo slug contiene il simbolo / la rotta non funzionerà. C’è qualche strumento che ci permette di codificare lo slug?
  Scrivere tutte le funzioni delle rotte nel controller dedicato
  Registrare il router dentro app.js con il prefisso posts/. 
*/


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

// importiamo il router
const postsRouter = require('./routers/Posts');



// Rotta principale
app.get('/', (req, res) => {
  res.send('<h1 style="text-align:center">Benvenuto nel mio blog!</h1>');
});

app.get("/post", postsController.index)

// Rotte relative all'entità post
app.use("/", postsRouter);

// Avvia il server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
