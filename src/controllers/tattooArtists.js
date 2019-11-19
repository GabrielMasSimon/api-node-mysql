const express = require('express');
const router = express.Router();
const tattooArtistService = require('../services/tattooArtistService');


//Get all tattooArtists
router.get('/tattooArtists', (req, res) => {
    tattooArtistService.getAll(req, res);
});

//Get tattooArtists by id
router.get('/tattooArtist/:id', (req, res) => {
    tattooArtistService.getById(req, res)
});

//Delete tattooArtist by id
router.delete('/tattooArtist/:id', (req, res) => {
    tattooArtistService.deleteById(req, res);
});

//Insert tattooArtist
router.post('/tattooArtist', (req, res) => {
    tattooArtistService.insert(req, res);
});

//Update tattooArtist
router.put('/tattooArtist', (req, res) => {
    tattooArtistService.update(req, res);
});

module.exports = router;