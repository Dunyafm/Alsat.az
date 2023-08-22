// script.js
$(document).ready(function() {
    $('#adForm').submit(function(event) {
      event.preventDefault();
      
      var formData = new FormData(this);
      
      $.ajax({
        url: '/api/add-ad',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
          alert('Объявление успешно добавлено!');
          window.location.href = '/ads'; // Redirect to ads page
        },
        error: function(error) {
          alert('Ошибка при добавлении объявления.');
          console.error(error);
        }
      });
    });
  });

  
  // server.js
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/'); // Upload directory
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(express.static('public')); // Serve static files like styles.css

app.post('/api/add-ad', upload.single('image'), (req, res) => {
  // Process form data and save to database
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imagePath = req.file.path;

  // Save data to the database and send a success response
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
