const request = require('supertest');
const express = require('express');
const { expect } = require('chai');

const app = express();

// Configura las rutas
const routes = require('../src/routes'); // Asumiendo que tienes un archivo que exporta tus rutas
app.use('/', routes);

describe('GET /products', function() {
  it('should return a list of available products', async function() {
    const res = await request(app)
      .get('/products')
      .expect(200);

    // Verifica que la respuesta sea una lista de productos disponibles
    expect(res.body).to.be.an('array');
    expect(res.body.every(product => product.existencia > 0)).to.be.true;
  });
});     
