const express = require('express');
const router = express.Router();
const multer = require("multer");
const Image = require('../Model/Image');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.post('/upload', upload.single('image'), async (req, res) => {
    const { tittle,author,category,quantity} = req.body;
  try {
    if( !req.file || !tittle || !author || !category || !quantity){
        return res.status(400).json({error:'details are required'});
    }

    const newImage = new Image({
      image: req.file.buffer,
      contentType: req.file.mimetype,tittle,author,category,quantity
    });

    await newImage.save();
    res.status(200).json({ message: 'Image uploaded successfully!' });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});
router.get('/book', async (req, res) => {
  try {
    const images = await Image.find(); 

    const formatted = images.map(img => ({
      _id: img._id,
      tittle: img.tittle,      
      author: img.author,
      category: img.category,
      quantity: img.quantity,
      imageUrl: `data:${img.contentType};base64,${img.image.toString('base64')}`
    }));

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;