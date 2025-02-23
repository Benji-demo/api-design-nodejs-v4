import prisma from "../db"
import express from 'express';

//GET all
export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where:{
            id: req.user.id
        },
        include:{
            products: true
        }
    }) 

    res.json({data: user.products})
}

//GET one(by ID)
export const getOneproduct = async (req, res) => {
    const id = req.params.id

    const product = await prisma.product.findFirst({
        where:{
            id,
            belongsToId: req.user.id
        }
    })

    res.json({data: product})
}


//POST product( create product)
export const createProduct = async (req, res, next) =>{
    try{
        const product = await prisma.product.create({
            data: {
                name: req.body.name,
                belongsToId: req.user.id
            }
        })
    
        res.json({data: product})
        
    } catch (e){
        next(e)
    }

    
}

//Put produt
export const updateProduct = async (req, res) => {
    const updated = await prisma.product.update({
        where:{
            id: req.params.id,
            belongsToId: req.user.id
        },
        data:{
            name: req.body.name
        }
    })

    res.json({data: updated })
}

//Delet Product 
export const deleteProduct = async (req, res) => {
    const deleted = await prisma.product.delete({
        where:{
            id: req.params.id,
            belongsToId: req.user.id
        }
    })
    res.json({data: deleted})
}

