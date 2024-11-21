let express = require("express");
let router = express.Router();
let menuItem = require("../modules/menuItem");

router.post("/",async (req,res) => {

    try{
        let data = req.body;
        let newMenu = new menuItem(data);

        let response = await newMenu.save();
        console.log("Data is Save");
        res.status(200).json(response);

    }catch(error){
        console.log("Error:" , error)
    }
    
})

router.get("/",async (req,res) => {

    try{

        response = await menuItem.find();
        console.log("Data is Fetch");
        res.status(200).json(response);

    }catch(error){
        console.log("Error:" , error)
    }
    
})

router.get("/:flavor",async (req,res) => {

    try{

        let flavor = req.params.flavor;
        
        if(flavor == 'Sweet' || flavor == 'Spicy' || flavor == 'Sour'){
            response = await menuItem.find({taste:flavor});
            console.log("Data is Fetch");
            res.status(200).json(response);
        }else{
            res.status(404).json("Invalid WorkType");
        }

    }catch(error){
        console.log("Error:" , error)
    }
    
})

router.put("/:id",async (req,res) => {

    try{

        let id = req.params.id;
        let updatedData = req.body;
        let response = await menuItem.findByIdAndUpdate(id,updatedData,{
            new:true,
            runvalidators:true,
        })

        if(!response){
            return res.status(404).json("Wrong Id");
        }

        console.log("Data is Updated");
        res.status(200).json(response);
    

    }catch(err){
        console.log("Error:" , err)
    }
})

router.delete("/:id",async (req,res) => {

    try{

        let id = req.params.id;
        let response = await menuItem.findByIdAndDelete(id)

        if(!response){
            return res.status(404).json("Wrong Id");
        }

        console.log("Data is Delete");
        res.status(200).json({message : "Menu Deleted Successfully"});
    

    }catch(err){
        console.log("Error:" , err)
    }
})

module.exports = router;