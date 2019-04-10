const express = require('express');
const router = express.Router();
const Product = require('../models/product');
//retornar datos
router.get('/', async (req,res)=>{
   const pro = await Product.find();
    res.json(pro);
 })
 router.get('/api/product', async (req,res)=>{
    const pro = await Product.find();
     res.json(pro);
  })
  
 router.get('/api/productos', async (req,res)=>{
    const pro = await Product.find();
     res.json(pro);
  })
 //devolver un product por id
router.get('/:id', async (req,res)=>{
    const test = await Test.findById(req.params.id);
     res.json(test);
 })
//insertar en la bse datos
    router.post('/', async (req,res)=>{  
           const { created_at,title,  url, author,points,objectID} = req.body;
        const pro = new Product({ created_at,title,  url, author,points,objectID });
        await pro.save();      
        res.json({pro});  
      })
 //actualizar o modificar base datos
router.put('/:id', async (req, res)=>{
    const { story_title, title, created_at, author, story_url } = req.body;
    const newpro = { story_title, title, created_at, author, story_url };
    await Product.findByIdAndUpdate(req.params.id, newpro)
})
//eliminar de basedatos
router.delete('/:id', async (req, res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.json({status:"eliminado"});
})
module.exports = router;