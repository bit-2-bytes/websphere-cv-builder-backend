const CVData = require('../model/cv-data-model')
const getCVData = async (req, res) =>{
    const data = await CVData.findById(req.params.id);
    if(!data){
        res.status(400);
        throw new Error("Data not found");
    }
    res.status(200).json(data)
}

const updateCVData = async (req, res) =>{
    const data = await CVData.findById(req.params.id);
    if(!data){
        res.status(400);
        throw new Error("Data not found");
    }
    const updatedData = await CVData.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    
      res.status(200).json(updatedData);
}

const addCVData = async (req, res) =>{
    const { name } = req.body;
    if(!name){
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    await CVData.create({name});
    res.status(201).json(req.body)
}

module.exports = { getCVData, updateCVData, addCVData }