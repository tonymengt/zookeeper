const path = require('path');
const router = require('express').Router();


// the is to create the root route or home page of any web application.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'))
})

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'))
})

// The * will act as a wildcard, meaning any route that wasn't previously defined will fall under this request
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})



module.exports = router

