import {Router} from 'express'
import {body, oneOf, validationResult} from 'express-validator'
import { hadnleInputErrors } from './modules/middleware'
import { createProduct, deleteProduct, getOneproduct, getProducts, updateProduct } from './handlers/product'
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update'

const router = Router()


/*
product
*/

router.get('/product', getProducts)
router.get('/product/:id', getOneproduct)
router.put('/product/:id' ,body('name').isString() ,hadnleInputErrors, updateProduct)
router.post('/product' ,body('name').isString() ,hadnleInputErrors, createProduct)
router.delete('/product/:id',deleteProduct)


/*
update
*/
router.get('/update', getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS','SHIPPED', 'DEPRECIATED']).optional(),
    body('version').optional(),
    hadnleInputErrors , 
    updateUpdate)

router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body("productId").exists().isString(),
    hadnleInputErrors,
    createUpdate)

router.delete('/update/:id',deleteUpdate)


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


router.delete('/updatepoint/:id', () => {})

export default router