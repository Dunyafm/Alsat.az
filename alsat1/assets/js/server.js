const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

let ads = []; // Здесь будут храниться объявления

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/getAds', (req, res) => {
  res.json(ads);
});

app.post('/api/addAd', (req, res) => {
  const newAd = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  };

  ads.push(newAd);
  res.json(newAd);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
