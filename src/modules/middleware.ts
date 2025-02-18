import { validationResult } from "express-validator"

export const hadnleInputErrors = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        res.status(400)
        res.json({errors: errors.array(), message: 'safaf input error'})
    } else {
        next()
    }
}