const express = require('express');
const api = require('./config/api');
const app = express();
const path = require('path');
const API_URL = process.env.API_URL;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// rota padrão
app.get('/', async (req, res) => {
  try {

   const response = await api.get('/produtos');

    const produtos = response.data;

    res.render('home', { produtos });

  } catch (error) {

    res.render('home', { produtos: [] });

  }
});

// rota do carrinho
app.get('/carrinho', (req, res) => {
  res.render('partials/carrinho'); // views/partials/carrinho.ejs
});

// rota de login
app.get('/login', (req, res) => {
  res.render('login');
});

//rota de cadastro
app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});
