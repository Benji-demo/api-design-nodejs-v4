import {Router} from 'express'
import {body, oneOf, validationResult} from 'express-validator'
import { hadnleInputErrors } from './modules/middleware'

const router = Router()


/*
product
*/

router.get('/product', (req, res) => {
    res.json({message: "hello"})
})
router.get('/product/:id', () => {})


router.put('/product/:id' ,body('name').isString() ,hadnleInputErrors, (req, res) => {})
router.post('/product' ,body('name').isString() ,hadnleInputErrors, () => {})
router.delete('/product', () => {})


/*
update
*/
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS','SHIPPED', 'DEPRECIATED' ]),
    body('version').optional(),
    hadnleInputErrors , (req, res) => {
})

router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    hadnleInputErrors,
    (req,res) => {})

router.delete('/update', () => {})


/*
updatepoint
*/
router.get('/updatepoint', (req, res) => {
    res.json({message: 'hello from updatepoint'})
})
router.get('/updatepoint/:id', () => {})

router.put('/updatepoint/:id',
    body('name').optional().isString(),
    body('description').optional().isString(),
    hadnleInputErrors , (req, res) => {
})

router.post('/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    hadnleInputErrors,
    (req, res) => {})


router.delete('/updatepoint', () => {})

export default router