const express = require('express');
const { generateImage , generateImageModel1 , generateImageModel2, generateImageModel3, generateImageModel4, createImageVariation,createImageVariation1, createImageVariation2, createImageVariation3, createImageVariation4  }=require('../controllers/openaiController');
//const { generateImage }=require('../controllers/openaiController');
const router = express.Router();

router.post('/generateimage',generateImage);
router.post('/generateimage1',generateImageModel1);
router.post('/generateimage2',generateImageModel2);
router.post('/generateimage3',generateImageModel3);
router.post('/generateimage4',generateImageModel4);
router.post('/imagevariation',createImageVariation);
router.post('/imagevariation1',createImageVariation1);
router.post('/imagevariation2',createImageVariation2);
router.post('/imagevariation3',createImageVariation3);
router.post('/imagevariation4',createImageVariation4);

module.exports = router;
