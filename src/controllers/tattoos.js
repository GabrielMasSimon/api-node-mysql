const express = require('express');
const router = express.Router();
const database = require('../database/database');
const tattooService = require('../services/tattooService')

router.get('/', (req, res) => {
    tattooService.home(req, res);
});

//Get all tattoos
router.get('/tattoos', (req, res) => {
    tattooService.getAll(req, res);
});

//Get tattoo by id
router.get('/tattoo/:id', (req, res) => {
    tattooService.getById(req, res);
});

//Delete tattoo by id
router.delete('/tattoo/:id', (req, res) => {
    tattooService.deleteById(req, res);
});

//Insert tattoo
router.post('/tattoo', (req, res) => {
    tattooService.insert(req, res);
});

//Update tattoo
router.put('/tattoo', (req, res) => {
    tattooService.update(req, res);
});

//Get tattoo by tattoArtistId
router.get('/tattooByArtist/:id', (req, res) => {
    tattooService.getByTattooArtist(req, res);
});

//Get tattoo by tattooStudio
router.get('/tattooByStudio/:id', (req, res) => {
    tattooService.getByTattooStudio(req, res);
});


//Get tattoo by color
router.get('/tattooByColor/:color', (req, res) => {
    tattooService.getByColor(req, res);
});


module.exports = router;