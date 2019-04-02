const router = require('express').Router()
const bookController = require('../controllers/book_controller.js')

router.get('/', bookController.findAll)
router.get('/:isbn', bookController.findOne)
router.post('/', bookController.create)
router.delete('/:isbn', bookController.delete)
router.put('/:isbn', bookController.update)
router.patch('/:isbn', bookController.update)

module.exports = router