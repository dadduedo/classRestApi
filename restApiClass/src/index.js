const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const { IntesaSanpaoloProspect, CreditAgricoleProspect, BNLProspect } = require('./object/prospect');
// Middleware per il parsing del corpo delle richieste in formato JSON
app.use(express.json());

// Dati di esempio (puoi sostituire con un database)
const prospects = [];
var i=0
// Rotte per gestire i prospect
app.get('/', (req, res) => {
  res.json(prospects);
});

app.post('/prospects/intesa-sanpaolo', async (req, res) => {
  try {
    const data = req.body;
    const prospect = new IntesaSanpaoloProspect(
      i,
      'Intesa Sanpaolo',
      data.productName,
      data.fiscalCode,
      data.monthlyPayment,
      data.tan,
      data.taeg,
      data.branchCode,
      data.dataReceived
    );
    prospects.push(prospect);
    i++
    res.status(201).json(prospects);
  } catch (error) {
    res.status(400).json({ error: 'Errore nella creazione del prospect Intesa Sanpaolo' });
  }
});

app.post('/prospects/bnl', async (req, res) => {
    try {
      const data = req.body;
      const prospect = new BNLProspect(
        i,
        'BNL',
        data.productName,
        data.fiscalCode,
        data.monthlyPayment,
        data.tan,
        data.taeg,
        data.email
      );
      prospects.push(prospect);
      i++
      res.status(201).json(prospects);
    } catch (error) {
      res.status(400).json({ error: 'Errore nella creazione del prospect BNL' });
    }
  });

app.post('/prospects/credit-agricole', async (req, res) => {
    try {
        const data = req.body;
        const prospect = new CreditAgricoleProspect(
            i,
            'Credit Agricole',
            data.productName,
            data.fiscalCode,
            data.monthlyPayment,
            data.tan,
            data.taeg,
            data.branchCode,
            data.dataReceived
        );
        prospects.push(prospect);
        i++
        res.status(201).json(prospects);
    } catch (error) {
    res.status(400).json({ error: 'Errore nella creazione del prospect Credit Agricole' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});