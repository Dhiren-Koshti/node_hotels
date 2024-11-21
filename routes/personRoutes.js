let express = require("express");
let router = express.Router();
let Person = require("../modules/Person");

router.post("/",async (req,res) => {

    try{

        let data = req.body;
        let newPerson = new Person(data);
        let response = await newPerson.save();
        console.log("Data is Save");
        res.status(200).json(response);

    }catch(error){
        console.log("Error:" , error)
    }
    
})

router.get("/",async (req,res) => {

    try{

        response = await Person.find();
        console.log("Data is Fetch");
        res.status(200).json(response);

    }catch(error){
        console.log("Error:" , error)
    }
    
})

router.get("/:workType",async (req,res) => {

    try{
        let workType = req.params.workType;
        
        if(workType == 'Chef' || workType == 'Waiter' || workType == 'Manager'){
            response = await Person.find({workType:workType});
            console.log("Data is Fetch");
            res.status(200).json(response);
        }else{
            res.status(404).json("Invalid WorkType");
        }
    }catch(err){
        console.log("Error:" , error)
    }

})

router.put("/:id",async (req,res) => {

    try{

        let id = req.params.id;
        let updatedData = req.body;
        let response = await Person.findByIdAndUpdate(id,updatedData,{
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
        let response = await Person.findByIdAndDelete(id)

        if(!response){
            return res.status(404).json("Wrong Id");
        }

        console.log("Data is Delete");
        res.status(200).json({message : "Person Deleted Successfully"});
    

    }catch(err){
        console.log("Error:" , err)
    }
})

module.exports = router;
