const express = require("express");
const router = express.Router();
const  Crud = require("../models/Data");
const Image = require("../models/Image");
const multer = require("multer");
const path = require("path");


// create data

router.post("/create" , async(req,res)=>{

    try{
        const { name, email, phone} = req.body;
        const crud = new Crud({name,email, phone});
        await crud.save();

        return res.status(201).json({mesage:"Added successfully"})

    } catch(error){
        return res.status(422).json({error:"something went wrong!"})

    }

})

// get data

router.get("/read" , async(req,res)=>{

    try{
      
        const data = await Crud.find();
        return res.status(201).json({data,mesage:"getdata successfully"})

    } catch(error){
        return res.status(422).json({error:"something went wrong!"})
    }

    
})

// get data id
router.get("/read/:id" , async(req,res)=>{

    try{
        const crud = await Crud.findById(req.params.id);
        return res.status(201).json({crud,mesage:"getdata successfully"})

    } catch(error){
        return res.status(422).json({error:"something went wrong!"})
    }
})


// update data
router.put("/update/:id" , async(req,res)=>{

    try{
        const crud = await Crud.findByIdAndUpdate(
       req.params.id ,req.body,{new:true} );
        return res.status(201).json({crud,mesage:"update successfully"})

    } catch(error){
        return res.status(422).json({error:"something went wrong!"})
    }
})

// delete data
router.delete("/delete/:id" , async(req,res) =>{
    try{
        const crud = await Crud.findByIdAndDelete(req.params.id);
        return res.status(201).json({crud,mesage:"delete successfully"})

    } catch(error){
        return res.status(422).json({error:"something went wrong!"})
    }
})



// storage setup for upload image
const store = multer.diskStorage({
    destination:"./uploads/",
    filename:function(req,file,cb){
   cb(null,Date.now() + path.extname(file.originalname))
    }
})

// initialize multer 
const upload = multer({
    storage:store,

})

// upload image 
router.post('/upload',upload.single("file"),async (req,res) =>{
    try{
       Image.create({image:req.file.filename})
        return res.status(201).json({msg:"file upload"})

    } catch(error){
        return res.status(422).json({error:"something went wrong!"})
    }
})

// get image 
router.get("/getimg" , async(req,res)=>{

    try{
      
        const data = await Image.find();
        return res.status(201).json({data,mesage:"get image successfully"})

    } catch(error){
        return res.status(422).json({error:"something went wrong!"})
    }

    
})

// delete image
router.delete("/del/:id" , async(req,res) =>{
    try{
        const data = await Image.findByIdAndDelete(req.params.id);
        return res.status(201).json({data,mesage:"delete successfully"})

    } catch(error){
        return res.status(422).json({error:"something went wrong!"})
    }
})




module.exports = router;
