import {Router} from 'express'

const router = Router()


/*
product
*/

router.get('/product', (req, res) => {
    res.json({message: "hello"})
})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
router.post('/product', () => {})
router.delete('/product', () => {})


/*
update
*/

router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('/update', () => {})
router.delete('/update', () => {})


/*
updatepoint
*/
router.get('/updatepoint', (req, res) => {
    res.json({message: 'hello from updatepoint'})
})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', () => {})
router.post('/updatepoint', () => {})
router.delete('/updatepoint', () => {})

export default router