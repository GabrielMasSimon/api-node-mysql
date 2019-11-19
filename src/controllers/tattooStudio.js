const express = require('express');
const router = express.Router();
const tattooStudioService = require('../services/tattooStudioService');

//Get all tattooStudios
router.get('/tattooStudios', (req, res) => {
    tattooStudioService.getAll(req, res);
});

//Get tattooStudio by id
router.get('/tattooStudio/:id', (req, res) => {
    tattooStudioService.getById(req, res);
});

//Delete tattooStudio by id
router.delete('/tattooStudio/:id', (req, res) => {
    tattooStudioService.deleteById(req, res);
});


//Insert tattooStudio
router.post('/tattooStudio', (req, res) => {
    tattooStudioService.insert(req, res);
});

//Update tattooStudio
router.put('/tattooStudio', (req, res) => {
    tattooStudioService.update(req, res);
});

module.exports = router;