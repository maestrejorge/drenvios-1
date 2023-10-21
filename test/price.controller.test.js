const request = require('supertest');
const express = require('express');
const { expect } = require('chai');
const app = express();

// Configura las rutas
const routes = require('../src/routes'); // Asumiendo que tienes un archivo que exporta tus rutas
app.use('/', routes);


describe('GET /:user_id/:nombre_producto', function() {
  this.timeout(5000);

  it('should return the correct price for a user and product', async function() {
    const res = await request(app)
      .get('/1/Nike Air Max 90')
      .expect(200);

    expect(res.body.price).to.equal(129.99);
  });

  it('should handle the case when user or product is not found', async function() {
    const res = await request(app)
      .get('/1000/Nonexistent Product')
      .expect(500);

    expect(res.body.error).to.equal('Internal server error');
  });
});
